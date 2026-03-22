"use client";

import { useChatModal } from "./ChatProvider";

export default function TerminalTrigger() {
  const { open } = useChatModal();
  return (
    <button
      onClick={open}
      className="font-[family-name:var(--font-display)] font-bold text-[#034694] tracking-tight hover:underline underline-offset-4 cursor-pointer"
    >
      Tanay_OS_V1!
    </button>
  );
}
