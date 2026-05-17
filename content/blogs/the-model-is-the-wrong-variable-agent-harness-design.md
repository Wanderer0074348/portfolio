---
title: "The Model Is the Wrong Variable: Your Agent's Performance Lives in the Harness"
date: 2026-05-11
ref: LOG_008
tag: AGENTS
readTime: 7 min
excerpt: A r/LocalLLaMA post showed Qwen3.6 35B beating commercial agent setups on real coding tasks — not because of the model, but because of a plan-first skill file. The delta between a well-designed harness and a badly-designed one is bigger than the delta between frontier models. Most teams are optimizing the wrong variable.
---

A post on r/LocalLLaMA last week hit 487 upvotes. Someone running Qwen3.6 35B — a model that costs nothing to run locally — was beating commercial agent setups on real coding tasks. Not because of the model. Because of a "plan-first skill file" that forced structured execution before the agent touched a single tool. The community's reaction was basically: *oh*.

That moment deserves a longer argument, because I think most teams are still spending engineering time on the wrong variable.

---

## The Model Is Not Your Bottleneck

Here's an uncomfortable reality: for most practical agent tasks in 2026, the delta between frontier models is smaller than the delta between a well-designed harness and a badly-designed one.

Run GPT-5.5 with no planning structure, no retry logic, and a vague system prompt. Then run Qwen3.6 35B locally with a proper plan-first harness, staged tool calls, and explicit failure recovery. The local model wins on task completion. Not always. Not on everything. But often enough that it should make you question where you're spending your optimization budget.

The model gives you a ceiling. The harness determines how close you get to it.

When researchers at MindStudio ran Qwen 3.6 Plus in chat mode versus inside a proper agentic harness, the difference wasn't marginal — the harness version completed multi-step tasks that the chat mode version reliably failed or abandoned midway. Same weights. Different wrapper. Wildly different outcomes.

So what is a harness actually doing that makes such a difference?

---

## What a Harness Adds

In chat mode, you hand a task to the model and hope. In a harness, you give it structure it can execute against. The four things that actually matter:

**1. Persistent context across steps.** The model doesn't re-read the original task from scratch on every tool call. The harness tracks state: what was planned, what was completed, what failed and why.

**2. Planning loops before execution.** Force the model to emit a plan as structured output before it touches any tool. This single intervention dramatically reduces the "wandering" behavior where agents take expensive, irreversible actions based on incomplete reasoning.

**3. Retry logic with adjusted context.** When a tool call fails, a harness can catch the error, inject the failure reason back into context, and prompt the model to revise — rather than just crashing or hallucinating a success.

**4. Tool gating.** The harness decides which tools are available at which phase. A model in planning mode shouldn't have access to write tools. A model in execution mode shouldn't be prompted to re-plan unless a step fails.

None of this is rocket science. But almost nobody builds it.

---

## The Plan-First Pattern (With Code)

Here's a minimal plan-first harness in Python. It's not production — it's the skeleton that shows what's actually going on:

```python
import json
from typing import Callable

PLAN_PROMPT = """Before taking any action, output a <plan> block with numbered steps.
Be specific. Each step should be independently executable.
Do not call any tools until you have emitted a complete plan.
"""

def run_plan_first_agent(
    task: str,
    tools: dict[str, Callable],
    model_client,
    max_steps: int = 12
) -> str:
    messages = [
        {"role": "system", "content": PLAN_PROMPT},
        {"role": "user", "content": task}
    ]
    
    plan_confirmed = False
    
    for step in range(max_steps):
        response = model_client.chat(
            messages=messages,
            # Only expose tools after planning phase
            tools=list(tools.values()) if plan_confirmed else []
        )
        
        content = response.content or ""
        tool_calls = getattr(response, "tool_calls", None)

        # Planning phase: look for the plan block
        if not plan_confirmed:
            if "<plan>" in content and "</plan>" in content:
                plan_confirmed = True
                messages.append({"role": "assistant", "content": content})
                # Now tell the model it can start executing
                messages.append({
                    "role": "user",
                    "content": "Plan looks good. Execute step 1."
                })
            else:
                # Model tried to skip planning — push back
                messages.append({"role": "assistant", "content": content})
                messages.append({
                    "role": "user",
                    "content": "You must output a <plan> block before taking any action."
                })
            continue

        # Execution phase: handle tool calls
        if tool_calls:
            messages.append({"role": "assistant", "content": content, "tool_calls": tool_calls})
            for tc in tool_calls:
                try:
                    result = tools[tc.name](**tc.arguments)
                    messages.append({
                        "role": "tool",
                        "content": json.dumps(result),
                        "tool_call_id": tc.id
                    })
                except Exception as e:
                    # Inject failure — let the model revise
                    messages.append({
                        "role": "tool",
                        "content": f"ERROR: {e}. Revise your approach for this step.",
                        "tool_call_id": tc.id
                    })
        else:
            # No tool call — model thinks it's done
            messages.append({"role": "assistant", "content": content})
            if "done" in content.lower() or "complete" in content.lower():
                return content

    return messages[-1]["content"]
```

The critical line is `tools=list(tools.values()) if plan_confirmed else []`. By withholding tools during the planning phase, you force the model to actually plan rather than immediately firing off a tool call and rationalizing the result afterward. This mirrors how good human engineers actually work — design before code.

---

## Skill Files Are the Harness Primitive Nobody's Talking About

The r/LocalLLaMA post that sparked this discussion wasn't just about plan-first execution — it was specifically about *skill files*: small, reusable prompt modules that get injected into the system prompt based on the task type.

A skill file for "code debugging" looks different from one for "database migration." It carries: relevant tool permissions, step templates the model should follow, failure modes to watch out for, and output format expectations.

This is the harness equivalent of a library. Instead of writing a monolithic system prompt that tries to handle everything, you compose harnesses from modular skill files. The model's behavior becomes predictable in a way that no amount of model upgrading achieves.

Qwen-Agent formalizes this pattern with its SubAgents and built-in tool primitives. But you don't need a framework — a dictionary of skill strings keyed by task category and a simple selector function is enough to get most of the benefit.

---

## The Uncomfortable Implication

If harness design drives more performance than model selection, then the industry's obsession with model releases is... mostly noise for practitioners?

I think that's roughly right, with a few caveats. New models genuinely expand the capability ceiling — tasks that were impossible become possible. But for the large majority of tasks that are already within the capability range of current frontier *and* strong local models, you are leaving far more performance on the table through bad harness design than you'd ever recover by bumping to the next model version.

The teams winning in production right now aren't the ones who upgraded to the latest weights first. They're the ones who built structured execution environments, added planning gates, wired retry loops with meaningful failure context, and made their agent behavior reproducible.

The model is not the product. The harness is the product. It's just less satisfying to talk about.

---

## What to Actually Do

If you're running agents in production (or building toward it), here's where to put the next sprint:

- Add a plan-first gate to every agent task. Force structured output before any tool execution. Watch task completion rates go up.
- Build a failure recovery loop. Every tool call needs a catch path that re-injects failure context rather than silently moving on.
- Modularize your system prompts into skill files keyed by task type. Stop writing monolithic system prompts.
- Gate tool access by phase. Planning agents get read tools only. Execution agents get write tools. Verification agents get neither.

Then, and only then, worry about which model you're running.

---

*References: r/LocalLLaMA post on Qwen3.6 35B + PI Coding Agent plan-first skill files · MindStudio blog "Why You Should Use an Agentic Harness With Qwen 3.6 Plus (Not Just Chat Mode)"*
