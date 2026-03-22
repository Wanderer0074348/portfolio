"use client";

import { useState, KeyboardEvent } from "react";
import { useChatModal } from "./ChatProvider";

export default function TerminalLauncher() {
  const { openWithCommand } = useChatModal();
  const [value, setValue] = useState("");

  function launch() {
    const cmd = value.trim();
    if (!cmd) {
      openWithCommand("help");
    } else {
      openWithCommand(cmd);
    }
    setValue("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") launch();
  }

  return (
    <div className="flex gap-6 items-stretch w-full max-w-[672px] mb-16">
      <div className="flex-1 border-[4px] border-white flex items-center p-2">
        <span className="font-mono font-bold text-[#034694] text-base px-4">&gt;</span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter_Command... (try: whoami)"
          className="flex-1 bg-transparent font-mono text-white text-base uppercase outline-none px-3 py-2.5 placeholder:text-[#404040]"
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
        />
      </div>
      <button
        onClick={launch}
        className="bg-[#034694] border-[4px] border-black px-11 py-5 font-[family-name:var(--font-display)] font-bold text-white text-xl tracking-[2px] uppercase shadow-[8px_8px_0px_0px_black] shrink-0 hover:bg-[#023a7a] transition-colors"
      >
        Initiate_Mission
      </button>
    </div>
  );
}
