import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteConfig } from "@/lib/config";

const imgSubjectPortrait = "https://www.figma.com/api/mcp/asset/f79df68d-02ee-48c6-92e4-884babf59c07";
const imgSkillIcon = "https://www.figma.com/api/mcp/asset/c7efbfb7-bfec-4e00-8821-9a5922311427";

const { experience, education, skillTiles, contact, achievements, certifications, leadership } = siteConfig;

export default function DossierPage() {
  return (
    <div className="bg-[#f9f9f9] flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-col gap-20 pt-32 pb-20 px-6 max-w-[1280px] mx-auto w-full">

        {/* ── Header Section ── */}
        <div className="flex gap-12 items-end">
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-[#034694] px-3 py-1 w-fit">
              <span className="font-[family-name:var(--font-code)] text-white text-sm tracking-[1.4px] uppercase">
                Subject_ID: {siteConfig.subjectId} // STATUS: FINAL_YEAR
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[128px] tracking-[-6.4px] uppercase leading-[1]">
              THE<br />ACADEMIC_DOSSIER
            </h1>
            <p className="font-sans font-normal text-[#434751] text-xl leading-7 max-w-[576px]">
              {siteConfig.name} — {education.degree}.<br />
              {education.institution}.<br />
              CGPA: {education.cgpa} · {education.location}.
            </p>
          </div>
        </div>

        {/* ── Main Content Block ── */}
        <div className="bg-white border-[8px] border-black p-[72px] flex flex-col gap-24 relative">
          <span className="absolute top-4 right-4 font-[family-name:var(--font-code)] text-[#a3a3a3] text-xs">
            RESTRICTED_ACCESS // LEVEL_4
          </span>
          <div className="absolute bottom-4 left-4 bg-[#034694] h-1 w-24" />

          {/* 00_ME */}
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4 flex flex-col gap-6">
              <div className="border-b-[4px] border-black pb-3">
                <h2 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[36px] tracking-[-1.8px] uppercase leading-10">
                  00_ME
                </h2>
              </div>
              <div className="flex flex-col font-[family-name:var(--font-code)] text-[#034694] text-sm leading-[17.5px]">
                <p>SUBJECT: {siteConfig.name.toUpperCase()}</p>
                <p>HANDLE: {siteConfig.handle}</p>
                <p>CLEARANCE: {siteConfig.clearance}</p>
              </div>
            </div>
            <div className="col-span-8 flex justify-center">
              <div className="bg-[#e2e2e2] border-[6px] border-black shadow-[8px_8px_0px_0px_black] overflow-hidden w-[55%]">
                <img
                  alt="Subject Portrait"
                  className="w-full h-auto"
                  src="/me.png"
                />
              </div>
            </div>
          </div>

          {/* 01_ORIGIN */}
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4 flex flex-col gap-6 pb-36">
              <div className="border-b-[4px] border-black pb-3">
                <h2 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[36px] tracking-[-1.8px] uppercase leading-10">
                  01_ORIGIN
                </h2>
              </div>
              <div className="flex flex-col font-[family-name:var(--font-code)] text-[#034694] text-sm leading-[17.5px]">
                <p>STATUS: {siteConfig.status}</p>
                <p>CLEARANCE: {siteConfig.clearance}</p>
                <p>VECTOR: {siteConfig.vector.replace(/ & /g, "_AND_").replace(/ /g, "_").toUpperCase()}</p>
              </div>
            </div>
            <div className="col-span-8 flex flex-col gap-8">
              <p className="font-sans font-medium text-[#1a1c1c] text-2xl leading-[33px]">
                Building at the frontier of {siteConfig.focus[0]} and {siteConfig.focus[1]}.
                Specializing in {siteConfig.focus[2]} with a focus on production-ready systems
                and high-tension real-time inference pipelines.
              </p>
              <div className="grid grid-cols-2 gap-8" style={{ gridTemplateRows: "108px" }}>
                {[
                  { label: "CORE_OBJECTIVE", value: siteConfig.focus[0] },
                  { label: "PRIMARY_STACK",  value: "Python · Golang · TS" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#f3f3f3] border-l-[8px] border-[#034694] pl-8 pr-6 py-6 flex flex-col gap-2">
                    <span className="font-[family-name:var(--font-code)] text-[#737373] text-base leading-6">{label}</span>
                    <span className="font-[family-name:var(--font-code)] font-bold text-[#1a1c1c] text-lg leading-7">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 02_HISTORY — experience from config */}
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <div className="border-b-[4px] border-black pb-3">
                <h2 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[36px] tracking-[-1.8px] uppercase leading-10">
                  02_HISTORY
                </h2>
              </div>
            </div>
            <div className="col-span-8 flex flex-col gap-12">
              {/* Education entry */}
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[30px] tracking-[-0.75px] uppercase leading-9">
                    {education.degree}
                  </h3>
                  <span className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-base shrink-0 ml-4">
                    [{education.period}]
                  </span>
                </div>
                <p className="font-[family-name:var(--font-code)] text-[#737373] text-sm tracking-[-0.7px] uppercase leading-5">
                  {education.institution} // {education.location}
                </p>
                <p className="font-sans text-[#434751] text-base leading-6 max-w-[672px]">
                  CGPA: {education.cgpa}. Specializing in AI engineering, neural architectures, and applied machine learning systems.
                </p>
              </div>

              {/* Experience entries from config */}
              {experience.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-4">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[30px] tracking-[-0.75px] uppercase leading-9">
                      {exp.title}
                    </h3>
                    <span className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-base shrink-0 ml-4">
                      [{exp.period}]
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-code)] text-[#737373] text-sm tracking-[-0.7px] uppercase leading-5">
                    {exp.org} // {exp.location}
                  </p>
                  <ul className="flex flex-col gap-2 max-w-[672px]">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="font-sans text-[#434751] text-base leading-6 pl-4 border-l-2 border-[#034694]">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 03_MODS — skill tiles from config */}
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <div className="border-b-[4px] border-black pb-3">
                <h2 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[36px] tracking-[-1.8px] uppercase leading-10">
                  03_MODS
                </h2>
              </div>
            </div>
            <div className="col-span-8 grid grid-cols-3 gap-1">
              {skillTiles.map(({ label, bg, text, border }) => (
                <div
                  key={label}
                  className={`${bg} ${border ? "border-[4px] border-black p-7" : "p-6"} flex flex-col items-start justify-between min-h-[233px]`}
                >
                  <img alt="" className="h-[28px] w-auto" src={imgSkillIcon} />
                  <div className={`font-[family-name:var(--font-display)] font-bold ${text} text-xl uppercase leading-5`}>
                    {label.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 04_ACHIEVEMENTS */}
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <div className="border-b-[4px] border-black pb-3">
                <h2 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-[36px] tracking-[-1.8px] uppercase leading-10">
                  04_WINS
                </h2>
              </div>
            </div>
            <div className="col-span-8 flex flex-col gap-8">
              {achievements.map((a) => (
                <div key={a.title} className="flex items-start justify-between gap-4 border-b border-[#e2e2e2] pb-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-lg uppercase tracking-[-0.5px]">{a.title}</span>
                    <span className="font-[family-name:var(--font-code)] text-[#737373] text-xs uppercase tracking-wider">{a.org} · {a.location}</span>
                    <span className="font-[family-name:var(--font-code)] text-[#034694] text-sm">{a.detail}</span>
                  </div>
                  <span className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-sm shrink-0">{a.date}</span>
                </div>
              ))}
              {certifications.map((c) => (
                <div key={c.title} className="flex items-start justify-between gap-4 border-b border-[#e2e2e2] pb-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-lg uppercase tracking-[-0.5px]">{c.title}</span>
                    <span className="font-[family-name:var(--font-code)] text-[#737373] text-xs uppercase tracking-wider">{c.org}</span>
                  </div>
                  <span className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-sm shrink-0">{c.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Terminal Output Section ── */}
        <div className="bg-black border-l-[8px] border-[#034694] pl-10 pr-8 py-8 flex flex-col gap-6 shadow-[8px_8px_0px_0px_black]">
          <div className="flex gap-2 items-center">
            <div className="bg-[#ef4444] rounded-full size-3" />
            <div className="bg-[#eab308] rounded-full size-3" />
            <div className="bg-[#22c55e] rounded-full size-3" />
            <span className="font-[family-name:var(--font-code)] text-[#737373] text-xs uppercase ml-4">
              system_log.txt
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-[family-name:var(--font-code)] text-[#034694] text-base leading-6">
              &gt; EXECUTING TALENT_SCAN for {siteConfig.name.toUpperCase()}...
            </p>
            <p className="font-[family-name:var(--font-code)] text-[#a3a3a3] text-base leading-6">
              ANALYZING ACADEMIC_TRAJECTORY... CGPA {education.cgpa} CONFIRMED.
            </p>
            <p className="font-[family-name:var(--font-code)] text-white text-base leading-6">
              &gt; [OK] {achievements[0].title.toUpperCase()} — {achievements[0].detail}
            </p>
            <p className="font-[family-name:var(--font-code)] text-white text-base leading-6">
              &gt; [OK] {experience[0].org.toUpperCase()} // {experience[0].title.toUpperCase()} — ACTIVE
            </p>
            <div className="flex items-center gap-2">
              <p className="font-[family-name:var(--font-code)] text-white text-base leading-6">
                Dossier verified. Recruitment channels open. Contact: {contact.email}
              </p>
              <div className="bg-[#034694] w-2 h-5 shrink-0" />
            </div>
          </div>
          <div className="flex gap-6 pt-2">
            <a
              href={`mailto:${contact.email}`}
              className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-sm tracking-[1.4px] uppercase hover:text-white transition-colors"
            >
              Contact_Secure_Line
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-sm tracking-[1.4px] uppercase hover:text-white transition-colors"
            >
              View_Github
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-sm tracking-[1.4px] uppercase hover:text-white transition-colors"
            >
              View_LinkedIn
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
