"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteConfig } from "@/lib/config";
import { useChatModal } from "../components/ChatProvider";

const imgArrow           = "https://www.figma.com/api/mcp/asset/1b067e79-3482-4d59-a1bd-3f62b4a64827";
const imgManuscriptArrow = "https://www.figma.com/api/mcp/asset/d05f5596-4895-498d-86d8-eb22d291eb12";

const PROJECT_IMGS: (string | null)[] = [
  "https://www.figma.com/api/mcp/asset/9d4352fd-0adf-4bf0-bfbb-80dc5bd775f6",
  "https://www.figma.com/api/mcp/asset/c7a1aa6a-140d-41f5-bad8-d7a4cb4f4092",
  "https://www.figma.com/api/mcp/asset/c5431d79-d84e-42ee-a234-e3a1119b3d16",
  "https://www.figma.com/api/mcp/asset/1d2ad0fa-4c0c-4320-8b91-5c6f1d878257",
  "https://www.figma.com/api/mcp/asset/c2435178-dcf5-4011-b69e-52047c558bdf",
  null,
  null,
  null,
  null,
  null,
];

const FILTERS = ["Full_Portfolio", "Projects", "Experience", "Club_Work"] as const;
type Filter = typeof FILTERS[number];

const lug = siteConfig.leadership[2];

const COMPANY_IMAGES: Record<string, string> = {
  esri:  "/Esri.png",
  ymt:   "/YMT.png",
  kptac: "/KPTAC.png",
};

export default function MissionsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Full_Portfolio");
  const [selectedExp, setSelectedExp] = useState<typeof siteConfig.experience[number] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("filterChanged"));
    }, 50);
  }, [activeFilter]);

  return (
    <div className="bg-[#f9f9f9] flex flex-col min-h-screen">
      <Header />

      <main className="pt-28 md:pt-32 pb-20 px-4 md:px-6 max-w-[1280px] mx-auto w-full">

        {/* ── Hero ── */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-8 mb-10 md:mb-14">
          <div className="md:col-span-8 flex flex-col gap-4 justify-end">
            <div className="bg-[#034694] px-3 py-1 w-fit">
              <span className="font-[family-name:var(--font-data)] text-white text-xs tracking-[1.2px] uppercase">
                {siteConfig.education.institution.split(",")[0]} · {siteConfig.education.period}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-black text-[56px] sm:text-[80px] md:text-[104px] lg:text-[128px] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-5px] lg:tracking-[-6.4px] uppercase leading-[1]">
              Active_<br />Missions
            </h1>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end pl-0 md:pl-1 mt-4 md:mt-0">
            <p className="font-sans text-[#434751] text-base md:text-lg leading-7 md:text-right">
              {siteConfig.name}&apos;s engineering portfolio.<br />
              {siteConfig.focus[0]}, {siteConfig.focus[1]},<br />
              and {siteConfig.focus[2]}.<br />
              All systems operational.
            </p>
          </div>
        </div>

        {/* ── Filter Toolbar ── */}
        <div className="border-b-[4px] border-black pb-6 md:pb-9 mb-8 md:mb-10 overflow-x-auto">
          <div className="flex gap-2 md:gap-4 items-center min-w-max">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 md:px-8 py-3 md:py-4 font-sans font-bold text-xs md:text-sm tracking-[1.4px] uppercase transition-colors border-[4px] border-black whitespace-nowrap ${
                  activeFilter === f
                    ? "bg-black text-white"
                    : "bg-transparent text-[#1a1c1c] hover:bg-black hover:text-white"
                }`}
              >
                {f.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* ── Full Portfolio ── */}
        {activeFilter === "Full_Portfolio" && (
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-10">

            {siteConfig.projects.slice(0, 3).map((p, i) => (
              <Link key={p.id} href={`/missions/${p.id}`} className="block group">
                <div className="bg-white border-[4px] border-black flex flex-col shadow-[8px_8px_0px_0px_black] p-1 isolate group-hover:shadow-[12px_12px_0px_0px_black] transition-shadow">
                  <div className="relative border-b-[4px] border-black overflow-hidden bg-[#e8e8e8]">
                    <div className="h-[180px] md:h-[207px] relative">
                      {PROJECT_IMGS[i] ? (
                        <img alt="" className="absolute inset-0 w-full h-[181%] max-w-none object-cover grayscale top-[-40%]" src={PROJECT_IMGS[i]} />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d4d4d4] to-[#a3a3a3] flex items-center justify-center">
                          <span className="font-[family-name:var(--font-code)] text-[#737373] text-xs uppercase text-center">Image Coming Soon</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 left-4 bg-black px-2 py-1">
                      <span className="font-[family-name:var(--font-data)] font-bold text-[#034694] text-xs uppercase">{p.sector}</span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-[family-name:var(--font-data)] font-bold text-[#5e5e5e] text-xs tracking-[-0.6px] uppercase">{p.ref}</span>
                      <div className={`${p.dotColor} size-3 shrink-0`} />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-2xl md:text-[30px] tracking-[-1px] md:tracking-[-1.5px] uppercase leading-tight">{p.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {p.stack.slice(0, 3).map((t) => (
                        <span key={t} className="font-[family-name:var(--font-data)] text-[#5e5e5e] text-[10px] border border-[#d4d4d4] px-1.5 py-0.5 uppercase">{t}</span>
                      ))}
                    </div>
                    <div className="border-t-[4px] border-black pt-5 md:pt-7 flex items-center justify-between mt-auto">
                      <span className="font-[family-name:var(--font-data)] font-bold text-[#1a1c1c] text-xs tracking-[1.2px] uppercase">{p.meta}</span>
                      <img alt="" className="size-4" src={imgArrow} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Current role card */}
            <div className="md:col-span-2 bg-black border-[4px] border-black shadow-[8px_8px_0px_0px_black] flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center p-8 md:p-11">
              <div className="flex-1 flex flex-col gap-6">
                <div className="bg-[#034694] px-3 py-1 w-fit">
                  <span className="font-[family-name:var(--font-data)] text-white text-[10px] tracking-[2px] uppercase">Current_Role</span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] font-bold text-[32px] md:text-[48px] tracking-[-1.5px] md:tracking-[-2.4px] uppercase leading-tight">
                  <span className="text-white">{siteConfig.experience[0].org}</span><br />
                  <span className="text-[#034694]">{siteConfig.experience[0].title}</span>
                </h2>
                <a href={siteConfig.contact.linkedinUrl} target="_blank" rel="noopener noreferrer"
                  className="bg-white border-b-[8px] border-r-[8px] border-[#034694] flex gap-4 items-center pl-8 md:pl-10 pr-10 md:pr-12 pt-3 md:pt-4 pb-5 md:pb-6 w-fit">
                  <span className="font-sans font-bold text-black text-sm md:text-base uppercase">View_Profile</span>
                  <img alt="" className="h-5 w-4" src={imgManuscriptArrow} />
                </a>
              </div>
              <div className="bg-[#171717] border-[4px] border-[#034694] w-full md:w-[233px] md:h-full md:min-h-[280px] relative overflow-hidden flex flex-col">
                <div className="bg-white">
                  <img alt="ESRI" className="w-full object-cover" src="/Esri.png" />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {[
                    { text: ">> ROLE_VITALS",       color: "text-white"     },
                    { text: "ORG: ESRI_GLOBAL",      color: "text-[#034694]" },
                    { text: "ROLE: AI_INTERN",        color: "text-[#034694]" },
                    { text: "LOCATION: SHARJAH_UAE", color: "text-[#034694]" },
                    { text: "SINCE: FEB.2026",        color: "text-[#034694]" },
                    { text: "STATUS: ACTIVE",         color: "text-[#034694]" },
                    { text: "> _",                    color: "text-[#034694]" },
                  ].map(({ text, color }, i) => (
                    <p key={i} className={`font-[family-name:var(--font-data)] text-xs leading-4 ${color}`}>{text}</p>
                  ))}
                </div>
              </div>
            </div>

            <Link href={`/missions/${siteConfig.projects[3].id}`} className="block group">
              <div className="bg-white border-[4px] border-black flex flex-col shadow-[8px_8px_0px_0px_black] p-1 isolate group-hover:shadow-[12px_12px_0px_0px_black] transition-shadow h-full">
                <div className="relative border-b-[4px] border-black overflow-hidden bg-[#e8e8e8]">
                  <div className="h-[180px] md:h-[207px] relative">
                    {PROJECT_IMGS[3] ? (
                      <img alt="" className="absolute inset-0 w-full h-[181%] max-w-none object-cover grayscale top-[-40%]" src={PROJECT_IMGS[3]} />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#d4d4d4] to-[#a3a3a3] flex items-center justify-center">
                        <span className="font-[family-name:var(--font-code)] text-[#737373] text-xs uppercase text-center">Image Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 left-4 bg-black px-2 py-1">
                    <span className="font-[family-name:var(--font-data)] font-bold text-[#034694] text-xs uppercase">{siteConfig.projects[3].sector}</span>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-data)] font-bold text-[#5e5e5e] text-xs tracking-[-0.6px] uppercase">{siteConfig.projects[3].ref}</span>
                    <div className={`${siteConfig.projects[3].dotColor} size-3 shrink-0`} />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-2xl md:text-[30px] tracking-[-1px] md:tracking-[-1.5px] uppercase leading-tight">{siteConfig.projects[3].title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {siteConfig.projects[3].stack.slice(0, 3).map((t) => (
                      <span key={t} className="font-[family-name:var(--font-data)] text-[#5e5e5e] text-[10px] border border-[#d4d4d4] px-1.5 py-0.5 uppercase">{t}</span>
                    ))}
                  </div>
                  <div className="border-t-[4px] border-black pt-5 md:pt-7 flex items-center justify-between mt-auto">
                    <span className="font-[family-name:var(--font-data)] font-bold text-[#1a1c1c] text-xs tracking-[1.2px] uppercase">{siteConfig.projects[3].meta}</span>
                    <img alt="" className="size-4" src={imgArrow} />
                  </div>
                </div>
              </div>
            </Link>

            {/* LUG row */}
            <div className="md:col-span-3 bg-black border-[4px] border-black shadow-[8px_8px_0px_0px_black] p-8 md:p-11 flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
              <div className="bg-[#034694] px-3 py-1 w-fit shrink-0">
                <span className="font-[family-name:var(--font-data)] text-white text-[10px] tracking-[2px] uppercase">Club_Work</span>
              </div>
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-2xl md:text-[36px] tracking-[-1px] md:tracking-[-1.8px] uppercase leading-tight">
                  {lug.title} — {lug.org}
                </h3>
              </div>
            </div>

          </div>
        )}

        {/* ── Projects ── */}
        {activeFilter === "Projects" && (
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-10">
            {siteConfig.projects.map((p, i) => (
              <Link key={p.id} href={`/missions/${p.id}`} className="block group">
                <div className="bg-white border-[4px] border-black flex flex-col shadow-[8px_8px_0px_0px_black] p-1 isolate group-hover:shadow-[12px_12px_0px_0px_black] transition-shadow">
                  <div className="relative border-b-[4px] border-black overflow-hidden bg-[#e8e8e8]">
                    <div className="h-[180px] md:h-[207px] relative">
                      {PROJECT_IMGS[i] ? (
                        <img
                          alt=""
                          className="absolute inset-0 w-full h-[181%] max-w-none object-cover grayscale top-[-40%]"
                          src={PROJECT_IMGS[i]}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d4d4d4] to-[#a3a3a3] flex items-center justify-center">
                          <span className="font-[family-name:var(--font-code)] text-[#737373] text-xs uppercase text-center">Image Coming Soon</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 left-4 bg-black px-2 py-1">
                      <span className="font-[family-name:var(--font-data)] font-bold text-[#034694] text-xs uppercase">
                        {p.sector}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-[family-name:var(--font-data)] font-bold text-[#5e5e5e] text-xs tracking-[-0.6px] uppercase">
                        {p.ref}
                      </span>
                      <div className={`${p.dotColor} size-3 shrink-0`} />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-2xl md:text-[30px] tracking-[-1px] md:tracking-[-1.5px] uppercase leading-tight">
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {p.stack.slice(0, 3).map((t) => (
                        <span key={t} className="font-[family-name:var(--font-data)] text-[#5e5e5e] text-[10px] border border-[#d4d4d4] px-1.5 py-0.5 uppercase">{t}</span>
                      ))}
                    </div>
                    <div className="border-t-[4px] border-black pt-5 md:pt-7 flex items-center justify-between mt-auto">
                      <span className="font-[family-name:var(--font-data)] font-bold text-[#1a1c1c] text-xs tracking-[1.2px] uppercase">
                        {p.meta}
                      </span>
                      <img alt="" className="size-4" src={imgArrow} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ── Experience ── */}
        {activeFilter === "Experience" && (
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-10">
            <button onClick={() => setSelectedExp(siteConfig.experience[0])} className="md:col-span-2 text-left bg-black border-[4px] border-black shadow-[8px_8px_0px_0px_black] flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center p-8 md:p-11 hover:shadow-[12px_12px_0px_0px_black] transition-shadow">
              <div className="flex-1 flex flex-col gap-6">
                <div className="bg-[#034694] px-3 py-1 w-fit">
                  <span className="font-[family-name:var(--font-data)] text-white text-[10px] tracking-[2px] uppercase">
                    Current_Role
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] font-bold text-[32px] md:text-[48px] tracking-[-1.5px] md:tracking-[-2.4px] uppercase leading-tight">
                  <span className="text-white">{siteConfig.experience[0].org}</span><br />
                  <span className="text-[#034694]">{siteConfig.experience[0].title}</span>
                </h2>
              </div>
              <div className="bg-[#171717] border-[4px] border-[#034694] w-full md:w-[233px] md:h-full md:min-h-[280px] relative overflow-hidden flex flex-col">
                <div className="bg-white">
                  <img alt="ESRI" className="w-full object-cover" src="/Esri.png" />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {[
                    { text: ">> ROLE_VITALS",       color: "text-white"     },
                    { text: "ORG: ESRI_GLOBAL",      color: "text-[#034694]" },
                    { text: "ROLE: AI_INTERN",        color: "text-[#034694]" },
                    { text: "LOCATION: SHARJAH_UAE", color: "text-[#034694]" },
                    { text: "SINCE: FEB.2026",        color: "text-[#034694]" },
                    { text: "STATUS: ACTIVE",         color: "text-[#034694]" },
                    { text: "> _",                    color: "text-[#034694]" },
                  ].map(({ text, color }, i) => (
                    <p key={i} className={`font-[family-name:var(--font-data)] text-xs leading-4 ${color}`}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </button>

            <div className="flex flex-col gap-4 md:gap-6">
              {siteConfig.experience.slice(1).map((exp) => (
                <button key={exp.id} onClick={() => setSelectedExp(exp)} className="text-left bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_black] p-5 md:p-6 flex flex-col gap-3 hover:shadow-[12px_12px_0px_0px_black] transition-shadow">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-[family-name:var(--font-data)] font-bold text-[#034694] text-[10px] tracking-[2px] uppercase">{exp.org}</span>
                    <span className="font-[family-name:var(--font-data)] text-[#a3a3a3] text-[10px] uppercase shrink-0">{exp.period}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-lg uppercase tracking-tight leading-tight">
                    {exp.title}
                  </h3>
                  <p className="font-[family-name:var(--font-data)] text-[#737373] text-xs uppercase">{exp.location}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Club Work ── */}
        {activeFilter === "Club_Work" && (
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-10">
            {siteConfig.leadership.map((l) => (
              <div key={l.title} className="bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_black] p-6 md:p-8 flex flex-col gap-4">
                <div className="bg-black px-2 py-1 w-fit">
                  <span className="font-[family-name:var(--font-data)] font-bold text-[#034694] text-[10px] tracking-[2px] uppercase">
                    {l.org}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-2xl uppercase tracking-tight leading-tight">
                  {l.title}
                </h3>
                <p className="font-sans text-[#5e5e5e] text-sm leading-5">{l.desc}</p>
              </div>
            ))}
          </div>
        )}

      </main>

      {selectedExp && (
        <ExperiencePopup exp={selectedExp} onClose={() => setSelectedExp(null)} />
      )}

      <Footer />
    </div>
  );
}

function ExperiencePopup({
  exp,
  onClose,
}: {
  exp: typeof siteConfig.experience[number];
  onClose: () => void;
}) {
  const { openWithCommand } = useChatModal();

  function handleTanyaBot() {
    onClose();
    openWithCommand(`Tell me about Tanay's experience at ${exp.org}`);
  }

  return (
    <div
      className="fixed inset-0 z-[90] bg-[rgba(0,0,0,0.6)] backdrop-blur-[2px] flex items-center justify-center p-4 md:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white border-[6px] border-black shadow-[12px_12px_0px_0px_black] w-full max-w-[560px] flex flex-col max-h-[90vh] overflow-y-auto">

        <div className="bg-black px-6 md:px-8 py-4 md:py-5 flex items-center justify-between sticky top-0">
          <div className="flex items-center gap-3">
            <div className="bg-[#034694] px-2 py-0.5">
              <span className="font-[family-name:var(--font-data)] text-white text-[10px] tracking-[2px] uppercase">{exp.org}</span>
            </div>
            <span className="font-[family-name:var(--font-data)] text-[#737373] text-[10px] uppercase">{exp.period}</span>
          </div>
          <button onClick={onClose} className="font-[family-name:var(--font-data)] text-[#737373] text-xs hover:text-white transition-colors">✕</button>
        </div>

        <div className="p-6 md:p-8 flex flex-col gap-6">
          {COMPANY_IMAGES[exp.id] && (
            <div className="bg-black border-[3px] border-black overflow-hidden w-1/2 mx-auto">
              <img alt={exp.org} className="w-full object-cover" src={COMPANY_IMAGES[exp.id]} />
            </div>
          )}
          <div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-black text-2xl md:text-[28px] tracking-[-1px] md:tracking-[-1.4px] uppercase leading-tight">
              {exp.title}
            </h3>
            <p className="font-[family-name:var(--font-data)] text-[#737373] text-xs uppercase mt-1">{exp.location}</p>
          </div>

          <ul className="flex flex-col gap-3">
            {exp.bullets.map((b, i) => (
              <li key={i} className="font-sans text-[#434751] text-sm leading-5 pl-4 border-l-[3px] border-[#034694]">
                {b}
              </li>
            ))}
          </ul>

          <button
            onClick={handleTanyaBot}
            className="bg-black text-white border-[4px] border-black px-8 py-4 font-[family-name:var(--font-display)] font-bold text-base uppercase tracking-[1.6px] shadow-[6px_6px_0px_0px_#034694] hover:bg-[#1a1a1a] transition-colors w-full mt-2"
          >
            Talk to Tanya_Bot →
          </button>
        </div>

      </div>
    </div>
  );
}
