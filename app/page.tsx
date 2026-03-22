import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteConfig } from "@/lib/config";

const imgDigitalGridArchitecture = "https://www.figma.com/api/mcp/asset/94856324-3b83-4e31-a78d-f57d923d6f3a";
const imgViewAllArrow = "https://www.figma.com/api/mcp/asset/bd32461d-b298-4312-9757-f69db85fc549";
const imgAccessFilesArrow = "https://www.figma.com/api/mcp/asset/2fa42a80-405b-4c50-931d-a9fbd93ae798";
const imgDataStreamIcon = "https://www.figma.com/api/mcp/asset/aa473288-c52f-48bb-9302-279f0ed5dc3b";
const imgInspectArrow = "https://www.figma.com/api/mcp/asset/56825ccb-3aed-459d-a939-24931c869a9b";
const imgGlobeIcon = "https://www.figma.com/api/mcp/asset/2168fbe8-a6ad-464e-bfb9-25da9249403a";
const imgQRIcon = "https://www.figma.com/api/mcp/asset/b0d6b8a2-f78d-482f-b291-5b0d102a3445";

const { name, title, focus, education, contact, skills } = siteConfig;

export default function Home() {
  return (
    <div className="bg-[#f9f9f9] flex flex-col min-h-screen">
      <Header />

      {/* ── Hero Section ── */}
      <section className="bg-black border-b-[6px] border-black pt-[176px] pb-[86px] px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1280 616\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%25\" width=\"100%25\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(90.51 0 0 43.558 640 308)\"><stop stop-color=\"rgba(255,255,255,1)\" offset=\"0.035355\"/><stop stop-color=\"rgba(255,255,255,0)\" offset=\"0.035355\"/></radialGradient></defs></svg>')",
          }}
        />
        <div className="max-w-[1440px] mx-auto relative flex gap-12 items-start">

          {/* Terminal Block */}
          <div className="w-[476px] shrink-0">
            <div className="bg-[#171717] border-[4px] border-white flex flex-col gap-4 p-7 shadow-[8px_8px_0px_0px_black]">
              <div className="border-b-2 border-[#404040] pb-2.5 flex gap-2 items-center">
                <div className="bg-[#ba1a1a] rounded-full size-3 shrink-0" />
                <div className="bg-[#034694] rounded-full size-3 shrink-0" />
                <span className="font-mono text-[#a3a3a3] text-xs tracking-[1.2px] uppercase">
                  System_Log_v4.2
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 font-mono text-sm">
                  <span className="font-bold text-[#034694]">&gt;</span>
                  <span className="text-[#f3f3f3]"> STATUS: </span>
                  <span className="bg-[#034694] px-2 text-white">FINAL_YEAR_ACTIVE</span>
                </div>
                <div className="font-mono text-sm">
                  <span className="font-bold text-[#034694]">&gt;</span>
                  <span className="text-[#f3f3f3]"> OBJECTIVE: DEPLOY_AI_ENGINEER_V1</span>
                </div>
                <div className="font-mono text-sm">
                  <span className="font-bold text-[#034694]">&gt;</span>
                  <span className="text-[#f3f3f3]"> FOCUS: {focus.join(", ").toUpperCase()}</span>
                </div>
                <p className="font-mono text-[#a3a3a3] text-sm leading-5">
                  {name}. {education.degree} @<br />
                  {education.institution.split(",")[0]}.<br />
                  CGPA: {education.cgpa}. Command the future.
                </p>
                <a href="/terminal" className="bg-white border-2 border-white mt-2 w-fit px-[26px] py-[14px] font-mono font-bold text-black text-sm tracking-[1.4px] uppercase">
                  View_Objectives
                </a>
              </div>
            </div>
          </div>

          {/* Typography Block */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-4">
              <span className="bg-white px-3 py-1 font-[family-name:var(--font-display)] font-bold text-black text-xs tracking-[1.2px] uppercase">
                V.01_STABLE
              </span>
              <div className="bg-white flex-1 h-1" />
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-[#034694] text-[128px] tracking-[-6.4px] uppercase leading-[1]">
              {title.split(" ").slice(0, 1).join("")}<br />{title.split(" ").slice(1).join("_")}
            </h1>
            <p className="font-sans font-light text-[#d4d4d4] text-2xl leading-8 max-w-[512px] pt-4">
              Specializing in {focus[0]} and {focus[1]}.<br />
              Engineering the next generation of intelligent<br />
              systems. {education.institution.split(",")[0]}, CGPA {education.cgpa}.
            </p>
          </div>

        </div>
      </section>

      {/* ── Featured Projects / Bento Grid ── */}
      <section className="bg-[#f9f9f9] px-6 py-24">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-16">

          {/* Section header */}
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-6 max-w-[576px]">
              <h2 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[72px] tracking-[-3.6px] uppercase leading-[1]">
                Active_Dossiers
              </h2>
              <p className="font-sans font-medium text-[#5e5e5e] text-lg leading-7">
                Featured projects from the Agent_OS ecosystem.<br />
                Each mission represents real engineering in production.
              </p>
            </div>
            <a href="/missions" className="flex gap-4 items-center border-b-[4px] border-black pb-3 px-4">
              <img alt="" className="h-4 w-5" src={imgViewAllArrow} />
              <span className="font-mono font-bold text-[#1a1c1c] text-sm tracking-[1.4px] uppercase">
                View All Projects
              </span>
            </a>
          </div>

          {/* Bento Grid — top 4 projects from config */}
          <div
            className="grid grid-cols-12 gap-8"
            style={{ gridTemplateRows: "411.33px 275px" }}
          >
            {/* Large Feature — project[0]: HybridLM Engine */}
            <div className="col-span-8 relative bg-black border-[6px] border-black overflow-hidden p-[6px] shadow-[8px_8px_0px_0px_black] isolate">
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
                <a href="/missions" className="border-[4px] border-white flex gap-3 items-center px-7 py-4 w-fit">
                  <span className="font-[family-name:var(--font-display)] font-bold text-white text-base tracking-[1.6px] uppercase">
                    Access Files
                  </span>
                  <img alt="" className="size-4" src={imgAccessFilesArrow} />
                </a>
              </div>
            </div>

            {/* Small Block 1 — project[1]: CrackIt */}
            <div className="col-span-4 bg-[#e8e8e8] border-[6px] border-black p-[38px] shadow-[8px_8px_0px_0px_black] flex flex-col justify-between">
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
                <a href="/missions" className="flex gap-2 items-center">
                  <span className="font-mono font-bold text-[#034694] text-xs tracking-[1.2px] uppercase">
                    Inspect_Code
                  </span>
                  <img alt="" className="size-[10.5px]" src={imgInspectArrow} />
                </a>
              </div>
            </div>

            {/* Small Block 2 — project[2]: KanGL */}
            <div className="col-span-4 bg-[#034694] border-[6px] border-black p-[38px] shadow-[8px_8px_0px_0px_black] flex flex-col justify-between">
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

            {/* Medium Block — project[3]: Plgrzr */}
            <div className="col-span-8 bg-[#f9f9f9] border-[6px] border-black overflow-hidden shadow-[8px_8px_0px_0px_black] flex">
              <div className="flex-1 p-8 flex flex-col gap-4">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[30px] tracking-[-1.5px] uppercase leading-9">
                  {siteConfig.projects[3].title}
                </h3>
                <p className="font-sans font-normal text-[#5e5e5e] text-sm leading-5">
                  {siteConfig.projects[3].desc}
                </p>
                <div className="flex gap-2 items-start pt-2 flex-wrap">
                  {siteConfig.projects[3].stack.map((t) => (
                    <span key={t} className="font-mono text-[#1a1c1c] text-xs border-2 border-black px-2 py-0.5 uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="bg-black w-[266px] shrink-0 flex items-center justify-center p-8">
                <div className="flex flex-col gap-4 items-center">
                  <img alt="" className="size-[45px]" src={imgQRIcon} />
                  <span className="font-mono text-white text-[10px] tracking-[1px] uppercase text-center">
                    {siteConfig.projects[3].meta}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Section — Terminal Focus Zone ── */}
      <section className="bg-black px-6 py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">

          <div className="mb-6">
            <span className="font-mono font-bold text-[#034694] text-sm tracking-[5.6px] uppercase">
              System_Override_Module
            </span>
          </div>

          {/* Heading with rotated highlight */}
          <div className="relative w-full max-w-[896px] h-[208px] mb-12">
            <div className="absolute left-1/2 -translate-x-1/2 top-[8px] font-[family-name:var(--font-display)] font-bold text-white text-[96px] tracking-[-4.8px] uppercase leading-[96px] whitespace-nowrap">
              Ready to
            </div>
            <div
              className="absolute top-[-7px] flex items-center justify-center"
              style={{ left: "calc(50% + 32px)", width: "404px" }}
            >
              <div className="-rotate-2">
                <div className="bg-[#034694] px-4 py-2">
                  <span className="font-[family-name:var(--font-display)] font-bold text-white text-[96px] tracking-[-4.8px] uppercase leading-[96px]">
                    Explore
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[112px] font-[family-name:var(--font-display)] font-bold text-white text-[96px] tracking-[-4.8px] uppercase leading-[96px] whitespace-nowrap">
              the Unseen?
            </div>
          </div>

          {/* Input + Button */}
          <div className="flex gap-6 items-stretch w-full max-w-[672px] mb-16">
            <div className="flex-1 border-[4px] border-white flex items-center p-2">
              <span className="font-mono font-bold text-[#034694] text-base px-4">&gt;</span>
              <input
                type="text"
                placeholder="Enter_Access_Code..."
                className="flex-1 bg-transparent font-mono text-[#404040] text-base uppercase outline-none px-3 py-2.5 placeholder:text-[#404040]"
              />
            </div>
            <button className="bg-[#034694] border-[4px] border-black px-11 py-5 font-[family-name:var(--font-display)] font-bold text-white text-xl tracking-[2px] uppercase shadow-[8px_8px_0px_0px_black] shrink-0">
              Initiate_Mission
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-12">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 items-center">
                <span
                  className={`font-mono font-bold text-lg tracking-[1px] uppercase ${
                    "highlight" in stat && stat.highlight ? "text-[#034694]" : "text-white"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="font-mono text-[#737373] text-[10px] tracking-[1px] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}
