"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useChatModal } from "./ChatProvider";

const navLinks = [
  { href: "/missions", label: "Missions" },
  { href: "/dossier", label: "Dossier" },
];

export default function Header() {
  const pathname = usePathname();
  const { toggle } = useChatModal();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa] border-b-[4px] border-black">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] font-bold text-2xl text-black tracking-[-1.2px] uppercase"
        >
          TANAY MATTA
        </Link>
        <nav className="flex gap-8 items-center">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-[family-name:var(--font-display)] font-bold text-base tracking-[-0.8px] uppercase transition-colors ${
                  active
                    ? "text-[#034694] border-b-[4px] border-[#034694] pb-2"
                    : "text-black"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={toggle}
          className="bg-[#034694] border-[4px] border-black px-7 py-3 font-[family-name:var(--font-display)] font-bold text-base text-white tracking-[-0.8px] uppercase shadow-[4px_4px_0px_0px_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          Chat with AI_
        </button>
      </div>
    </header>
  );
}
