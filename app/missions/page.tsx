"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteConfig } from "@/lib/config";

const imgSearchIcon    = "https://www.figma.com/api/mcp/asset/61e6bf8b-b632-44a9-a92c-1a12083ea481";
const imgArrow         = "https://www.figma.com/api/mcp/asset/1b067e79-3482-4d59-a1bd-3f62b4a64827";
const imgManuscriptArrow = "https://www.figma.com/api/mcp/asset/d05f5596-4895-498d-86d8-eb22d291eb12";
const imgTerminalCorner  = "https://www.figma.com/api/mcp/asset/2428782a-e6f4-46ca-af9a-ae0a86db5a18";

// Project images (placeholder grid pattern per card)
const PROJECT_IMGS = [
  "https://www.figma.com/api/mcp/asset/9d4352fd-0adf-4bf0-bfbb-80dc5bd775f6",
  "https://www.figma.com/api/mcp/asset/c7a1aa6a-140d-41f5-bad8-d7a4cb4f4092",
  "https://www.figma.com/api/mcp/asset/c5431d79-d84e-42ee-a234-e3a1119b3d16",
  "https://www.figma.com/api/mcp/asset/1d2ad0fa-4c0c-4320-8b91-5c6f1d878257",
  "https://www.figma.com/api/mcp/asset/c2435178-dcf5-4011-b69e-52047c558bdf",
];

interface MissionCard {
  id: string;
  sector: string;
  ref: string;
  title: string;
  desc: string;
  meta: string;
  dotColor: string;
  img: string;
  stack: readonly string[];
  tag: "full" | "progress" | "archived";
}

// Map config projects to MissionCard format
const missions: MissionCard[] = siteConfig.projects.map((p, i) => ({
  id: p.id,
  sector: p.sector,
  ref: p.ref,
  title: p.title,
  desc: p.desc,
  meta: p.meta,
  dotColor: p.dotColor,
  img: PROJECT_IMGS[i] ?? PROJECT_IMGS[0],
  stack: p.stack,
  tag: p.tag,
}));

const FILTERS = ["Full_Portfolio", "In_Progress", "Archived"] as const;
type Filter = typeof FILTERS[number];

export default function MissionsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Full_Portfolio");
  const [search, setSearch] = useState("");

  const filtered = missions.filter((m) => {
    if (activeFilter === "In_Progress" && m.tag !== "progress") return false;
    if (activeFilter === "Archived" && m.tag !== "archived") return false;
    if (search && !m.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="bg-[#f9f9f9] flex flex-col min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-6 max-w-[1280px] mx-auto w-full">

        {/* ── Hero ── */}
        <div className="grid grid-cols-12 gap-8 mb-14" style={{ gridTemplateRows: "296px" }}>
          <div className="col-span-8 flex flex-col gap-4 justify-end">
            <div className="bg-[#034694] px-3 py-1 w-fit">
              <span className="font-[family-name:var(--font-data)] text-white text-xs tracking-[1.2px] uppercase">
                {siteConfig.education.institution.split(",")[0]} · {siteConfig.education.period}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-black text-[128px] tracking-[-6.4px] uppercase leading-[1]">
              Active_<br />Missions
            </h1>
          </div>
          <div className="col-span-4 flex flex-col justify-end pl-1">
            <p className="font-sans text-[#434751] text-lg leading-7 text-right">
              {siteConfig.name}&apos;s engineering portfolio.<br />
              {siteConfig.focus[0]}, {siteConfig.focus[1]},<br />
              and {siteConfig.focus[2]}.<br />
              All systems operational.
            </p>
          </div>
        </div>

        {/* ── Filter Toolbar ── */}
        <div className="border-b-[4px] border-black pb-9 flex gap-4 items-center mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-8 py-4 font-sans font-bold text-sm tracking-[1.4px] uppercase transition-colors border-[4px] border-black ${
                activeFilter === f
                  ? "bg-black text-white"
                  : "bg-transparent text-[#1a1c1c] hover:bg-black hover:text-white"
              }`}
            >
              {f.replace("_", " ")}
            </button>
          ))}
          <div className="flex-1" />
          <div className="relative w-64">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <img alt="" className="size-[18px]" src={imgSearchIcon} />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="FILTER_THREADS..."
              className="w-full bg-white border-[4px] border-black pl-[52px] pr-4 py-4 font-[family-name:var(--font-data)] text-sm text-[#6b7280] placeholder:text-[#6b7280] outline-none"
            />
          </div>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-3 gap-10">

          {/* Row 1 — Cards 1, 2, 3 */}
          {filtered.slice(0, 3).map((m) => (
            <MissionCardComponent key={m.id} card={m} />
          ))}

          {/* Row 2 — Card 4 + Special Card */}
          {filtered.find((m) => m.id === "4") && (
            <MissionCardComponent card={filtered.find((m) => m.id === "4")!} />
          )}

          {/* Special Terminal Card — spans 2 cols */}
          <div className="col-span-2 bg-black border-[4px] border-black shadow-[8px_8px_0px_0px_black] flex gap-10 items-center p-11">
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-[#034694] px-3 py-1 w-fit">
                <span className="font-[family-name:var(--font-data)] text-white text-[10px] tracking-[2px] uppercase">
                  Current_Role
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-[48px] tracking-[-2.4px] uppercase leading-[48px]">
                <span className="text-white">{siteConfig.experience[0].org}</span><br />
                <span className="text-[#034694]">{siteConfig.experience[0].title}</span>
              </h2>
              <p className="font-[family-name:var(--font-data)] text-[#a3a3a3] text-sm leading-5">
                {siteConfig.experience[0].bullets[0]}
              </p>
              <a
                href={siteConfig.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-b-[8px] border-r-[8px] border-[#034694] flex gap-4 items-center pl-10 pr-12 pt-4 pb-6 w-fit"
              >
                <span className="font-sans font-bold text-black text-base uppercase">View_Profile</span>
                <img alt="" className="h-5 w-4" src={imgManuscriptArrow} />
              </a>
            </div>

            {/* Mini terminal */}
            <div className="bg-[#171717] border-[4px] border-[#034694] w-[233px] h-full min-h-[280px] relative overflow-hidden shrink-0">
              <img alt="" className="absolute top-0 right-0 h-9 w-8" src={imgTerminalCorner} />
              <div className="p-6 flex flex-col gap-5 mt-2">
                {[
                  { text: ">> RUN DIAGNOSTIC",                          color: "text-white"      },
                  { text: `CGPA: ${siteConfig.education.cgpa}`,         color: "text-[#034694]"  },
                  { text: `PROJECTS: ${siteConfig.projects.length}`,    color: "text-[#034694]"  },
                  { text: `HACKATHON: WINNER`,                          color: "text-[#034694]"  },
                  { text: `STATUS: ${siteConfig.status}`,               color: "text-[#034694]"  },
                  { text: "SYSTEMS: NOMINAL",                           color: "text-[#034694]"  },
                  { text: "> _",                                         color: "text-[#034694]"  },
                ].map(({ text, color }, i) => (
                  <p key={i} className={`font-[family-name:var(--font-data)] text-xs leading-4 ${color}`}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3 — Card 5 */}
          {filtered.find((m) => m.id === "5") && (
            <MissionCardComponent card={filtered.find((m) => m.id === "5")!} />
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

function MissionCardComponent({ card }: { card: MissionCard }) {
  return (
    <div className="bg-white border-[4px] border-black flex flex-col shadow-[8px_8px_0px_0px_black] p-1 isolate">
      {/* Image */}
      <div className="relative border-b-[4px] border-black overflow-hidden bg-[#e8e8e8]">
        <div className="h-[207px] relative">
          <img
            alt=""
            className="absolute inset-0 w-full h-[181%] max-w-none object-cover grayscale top-[-40%]"
            src={card.img}
          />
        </div>
        <div className="absolute top-4 left-4 bg-black px-2 py-1">
          <span className="font-[family-name:var(--font-data)] font-bold text-[#034694] text-xs uppercase">
            {card.sector}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-data)] font-bold text-[#5e5e5e] text-xs tracking-[-0.6px] uppercase">
            {card.ref}
          </span>
          <div className={`${card.dotColor} size-3 shrink-0`} />
        </div>
        <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[30px] tracking-[-1.5px] uppercase leading-[30px]">
          {card.title}
        </h3>
        <p className="font-sans text-[#434751] text-sm leading-5">{card.desc}</p>
        <div className="flex flex-wrap gap-1">
          {card.stack.slice(0, 3).map((t) => (
            <span key={t} className="font-[family-name:var(--font-data)] text-[#5e5e5e] text-[10px] border border-[#d4d4d4] px-1.5 py-0.5 uppercase">{t}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t-[4px] border-black pt-7 flex items-center justify-between mt-auto">
          <span className="font-[family-name:var(--font-data)] font-bold text-[#1a1c1c] text-xs tracking-[1.2px] uppercase">
            {card.meta}
          </span>
          <img alt="" className="size-4" src={imgArrow} />
        </div>
      </div>
    </div>
  );
}
