"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

const imgDigitalGridArchitecture = "https://www.figma.com/api/mcp/asset/94856324-3b83-4e31-a78d-f57d923d6f3a";
const imgAccessFilesArrow        = "https://www.figma.com/api/mcp/asset/2fa42a80-405b-4c50-931d-a9fbd93ae798";
const imgDataStreamIcon          = "https://www.figma.com/api/mcp/asset/aa473288-c52f-48bb-9302-279f0ed5dc3b";
const imgInspectArrow            = "https://www.figma.com/api/mcp/asset/56825ccb-3aed-459d-a939-24931c869a9b";
const imgGlobeIcon               = "https://www.figma.com/api/mcp/asset/2168fbe8-a6ad-464e-bfb9-25da9249403a";

const item = (delay: number) => ({
  hidden:  { y: 32, opacity: 0 },
  visible: { y: 0,  opacity: 1, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const viewport = { once: true, amount: 0.15 };

export default function BentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-12 gap-8"
      style={{ gridTemplateRows: "411.33px 275px" }}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {/* Large Feature — project[0]: HybridLM Engine */}
      <motion.div variants={item(0)} className="col-span-8 relative bg-black border-[6px] border-black overflow-hidden p-[6px] shadow-[8px_8px_0px_0px_black] isolate">
        <div className="absolute inset-0 z-[1]">
          <img alt="" className="w-full h-full object-cover" src={imgDigitalGridArchitecture} />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        <div className="absolute inset-0 bg-[rgba(3,70,148,0.3)] mix-blend-multiply z-[2]" />
        <div className="absolute inset-[6px] bg-black z-[3] p-10 flex flex-col justify-between">
          <div className="flex flex-col gap-4 pb-8">
            <span className="font-mono font-bold text-[#034694] text-sm tracking-[2.8px] uppercase">
              {siteConfig.projects[0].sector}
            </span>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-[36px] tracking-[-1.8px] uppercase leading-10">
              {siteConfig.projects[0].title}
            </h3>
            <p className="font-sans font-light text-[#a3a3a3] text-base leading-6">
              {siteConfig.projects[0].desc}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {siteConfig.projects[0].stack.slice(0, 4).map((t) => (
                <span key={t} className="font-mono text-[#737373] text-xs border border-[#404040] px-2 py-0.5 uppercase">{t}</span>
              ))}
            </div>
          </div>
          <a href={`/missions/${siteConfig.projects[0].id}`} className="border-[4px] border-white flex gap-3 items-center px-7 py-4 w-fit">
            <span className="font-[family-name:var(--font-display)] font-bold text-white text-base tracking-[1.6px] uppercase">
              Access Files
            </span>
            <img alt="" className="size-4" src={imgAccessFilesArrow} />
          </a>
        </div>
      </motion.div>

      {/* Small Block 1 — project[1]: CrackIt */}
      <motion.div variants={item(0.12)} className="col-span-4 bg-[#e8e8e8] border-[6px] border-black p-[38px] shadow-[8px_8px_0px_0px_black] flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="bg-black size-12 flex items-center justify-center shrink-0">
            <img alt="" className="size-[18px]" src={imgDataStreamIcon} />
          </div>
          <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-2xl tracking-[-0.6px] uppercase mt-2">
            {siteConfig.projects[1].title}
          </h3>
          <p className="font-sans font-normal text-[#5e5e5e] text-sm leading-5">
            {siteConfig.projects[1].desc.slice(0, 80)}…
          </p>
        </div>
        <div className="pt-4">
          <a href={`/missions/${siteConfig.projects[1].id}`} className="flex gap-2 items-center">
            <span className="font-mono font-bold text-[#034694] text-xs tracking-[1.2px] uppercase">
              Inspect_Code
            </span>
            <img alt="" className="size-[10.5px]" src={imgInspectArrow} />
          </a>
        </div>
      </motion.div>

      {/* Small Block 2 — project[2]: KanGL */}
      <motion.div variants={item(0.22)} className="col-span-4">
        <Link href={`/missions/${siteConfig.projects[2].id}`} className="block h-full">
          <div className="h-full bg-[#034694] border-[6px] border-black p-[38px] shadow-[8px_8px_0px_0px_black] flex flex-col justify-between hover:shadow-[12px_12px_0px_0px_black] transition-shadow">
            <div className="flex flex-col gap-3">
              <div className="bg-black px-2 py-1 w-fit">
                <span className="font-sans font-bold text-white text-[10px] tracking-[3px] uppercase">
                  {siteConfig.projects[2].sector}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-2xl tracking-[-0.6px] uppercase">
                {siteConfig.projects[2].title}
              </h3>
              <p className="font-sans font-normal text-[rgba(255,255,255,0.8)] text-sm leading-5">
                {siteConfig.projects[2].desc.slice(0, 80)}…
              </p>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <img alt="" className="h-[34.5px] w-9" src={imgGlobeIcon} />
              <span className="font-mono font-bold text-white text-xs">ACT_LINK: ON</span>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Medium Block — Currently at ESRI */}
      <motion.div variants={item(0.32)} className="col-span-8 bg-[#f9f9f9] border-[6px] border-black overflow-hidden shadow-[8px_8px_0px_0px_black] flex">
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-[#034694] px-2 py-0.5 font-mono font-bold text-white text-[10px] tracking-[2px] uppercase">
              Live
            </span>
            <span className="font-mono text-[#5e5e5e] text-[10px] tracking-[1px] uppercase">
              {siteConfig.experience[0].period}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[30px] tracking-[-1.5px] uppercase leading-9">
              Interning at ESRI
            </h3>
            <p className="font-sans font-normal text-[#5e5e5e] text-sm leading-5">
              {siteConfig.experience[0].title} · {siteConfig.experience[0].org} · {siteConfig.experience[0].location}
            </p>
          </div>
        </div>
        <div className="bg-black w-[266px] shrink-0">
          <img alt="ESRI" className="w-full h-full object-cover" src="/Esri.png" />
        </div>
      </motion.div>

    </motion.div>
  );
}
