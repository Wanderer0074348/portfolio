---
title: "The Frontier Model Tax: Why Your Agent Stack is Hemorrhaging Tokens"
date: 2026-04-29
ref: LOG_006
tag: ARCHITECTURE
readTime: 7 min
excerpt: Every token you route through a frontier model for a task a small model could handle is a tax on your architecture. At agent-scale, it compounds into a $27M/year line item. A breakdown of the Plan-and-Execute pattern, what tasks actually need frontier models, and the 90/9/1 cost split that works in production.
---

Every token you route through a frontier model for a task a small model could handle is a tax on your architecture. Most teams are paying it without realizing it — and at agent-scale, it compounds fast.

---

Let me make the case with numbers. A single Claude Opus or GPT-4-class inference costs roughly 40–100× more per token than running a 7B model locally or via a cheap API endpoint. In a chat UI that's noise. In an agentic pipeline that fires 50–200 LLM calls per task completion? That's the difference between $0.003 and $0.30 per user action. At 100k daily active users, you've turned a rounding error into a $27M/year line item.

The thing is, most of those 50–200 calls aren't reasoning. They're parsing. They're routing. They're extracting a field from a JSON blob, deciding which of three tools to invoke next, or generating a short summary of an intermediate result. A fine-tuned 3B model handles all of that with 98%+ accuracy. You don't need Opus to format a filename.

## The Plan-and-Execute Pattern

The architecture that actually works in production looks less like "one big model doing everything" and more like a small software system where LLMs play specific, scoped roles.

The canonical version is **Plan-and-Execute**:

1. A frontier model receives the user's goal, decomposes it into a structured plan, and emits a task graph
2. Specialized small models execute individual steps in that graph
3. The frontier model re-enters only when something requires genuine reasoning — a judgment call, an error recovery, a synthesis across multiple ambiguous results

Here's what that routing layer looks like in practice:

```python
from dataclasses import dataclass
from enum import Enum
from typing import Callable

class ModelTier(Enum):
    FRONTIER = "frontier"   # Claude Opus, GPT-4o, Gemini Ultra
    MID = "mid"             # Claude Haiku, Gemini Flash, Llama 4 Scout
    SMALL = "small"         # Qwen 3.5-1.5B, Gemma 4 2B, local fine-tunes

@dataclass
class AgentStep:
    task_type: str
    input_complexity: int   # 1–10 score from planner
    requires_judgment: bool
    
def route_to_model(step: AgentStep) -> ModelTier:
    """
    Route an agent step to the cheapest model that can handle it reliably.
    """
    # Structured extraction, formatting, tool selection from clear criteria
    if step.task_type in ("extract", "format", "classify", "route") and not step.requires_judgment:
        return ModelTier.SMALL
    
    # Summarization, drafting, moderate reasoning
    if step.input_complexity <= 6 and not step.requires_judgment:
        return ModelTier.MID
    
    # Ambiguous goals, multi-step reasoning, error recovery, synthesis
    return ModelTier.FRONTIER

def execute_step(step: AgentStep, model_registry: dict[ModelTier, Callable]):
    tier = route_to_model(step)
    model_fn = model_registry[tier]
    return model_fn(step)
```

This isn't clever — it's obvious once you write it down. The problem is that most agent frameworks default to a single model client passed in at initialization, making it easy to never question whether every call needs the same model.

LangGraph, CrewAI, and the emerging Microsoft Agent Framework 1.0 all support per-node model configuration, but you have to opt into heterogeneity consciously. The frameworks won't save you from yourself.

## What Tasks Actually Need a Frontier Model

I'll be direct: fewer than you think.

**Small models handle well:**
- Structured extraction (JSON from unstructured text)
- Tool/function selection when the options are clear
- Template-driven code generation (boilerplate, CRUD, config files)
- Short summarization of well-structured content
- Binary or small-N classification tasks
- Input validation and normalization

**Frontier models earn their cost:**
- Ambiguous multi-constraint goal decomposition
- Code reasoning across large, unfamiliar codebases
- Error recovery when the root cause isn't obvious from the trace
- Cross-document synthesis where the answer requires connecting disparate facts
- Anything where the failure mode of being wrong is expensive and hard to detect

The heuristic that's worked for me: if you can write a 50-line deterministic function that gets it right 90% of the time, a small model gets you to 98%. A frontier model gets you to 99.5%. Ask yourself what that 1.5% is worth in your specific context.

## The arxiv Paper That Put Numbers to This

Belcak and Heinrich's recent paper *Small Language Models are the Future of Agentic AI* ran the empirical version of this argument. Their key finding: in multi-step agentic benchmarks, replacing frontier models with tuned small models for execution steps while preserving frontier models at the planning layer degraded end-task accuracy by less than 3% while cutting inference cost by 67–89%.

That's not a toy result. That's production-viable headroom for most applications. And it assumes off-the-shelf small models — with task-specific fine-tuning (which is cheaper than ever in 2026, given Llama 4, Qwen 3.5, and Gemma 4 all having permissive licenses), the accuracy gap narrows further.

## The Counterargument I Actually Take Seriously

The honest pushback is **reliability surface area**. Every additional model in your pipeline is another thing to version, monitor, and debug. When your agent fails, was it the planner (frontier), the executor (small model), or the handoff between them? Debugging a homogeneous pipeline is easier than debugging a heterogeneous one.

This is real. My answer: the debugging overhead is front-loaded and amortized quickly. Instrument your model calls from day one — log inputs, outputs, model tier, and latency per step. The cost visibility alone pays for the complexity, and once you've run a few thousand tasks you'll see exactly where the failure modes cluster.

## What I'd Actually Ship Tomorrow

If I were building an agentic product right now, the architecture would be:

1. **Qwen 3.5 (7B) or Gemma 4 (4B)** as the default execution model — run locally or via Fireworks/Together at ~$0.04/million tokens
2. **Claude Sonnet or Gemini Flash** for mid-tier tasks — good reasoning, 5–10× cheaper than frontier
3. **Frontier model gated behind complexity score + human-visible actions** — decomposing goals, synthesizing final outputs, anything the user will directly see

The 90/9/1 split in practice: 90% of calls hit the small model, 9% hit mid-tier, 1% hit frontier. Your cost profile looks like mid-tier pricing while your capability ceiling stays at frontier.

---

The industry is obsessed with the capability ceiling — which model can do the hardest thing. Production agentic systems live and die on the cost floor — what's the minimum model that handles each step reliably. The papers are catching up to what the practitioners building at scale already know: heterogeneity isn't a compromise, it's the design.

---

*References: Belcak & Heinrich, "Small Language Models are the Future of Agentic AI" (arxiv:2506.02153) · HN: news.ycombinator.com/item?id=44430311 · dev.to AI Weekly April 2026*
