import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VideoPlayer from "../../components/VideoPlayer";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { siteConfig } from "@/lib/config";
import { projectsExtended } from "@/lib/projects-extended";

export function generateStaticParams() {
  return siteConfig.projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = siteConfig.projects.find((p) => p.id === id);
  if (!project) notFound();

  const ext = projectsExtended[project.id as keyof typeof projectsExtended];
  if (!ext) notFound();

  return (
    <div className="bg-[#f9f9f9] flex flex-col min-h-screen">
      <Header />

      <main className="pt-20 md:pt-24">

        {/* ── Back nav ── */}
        <div className="px-4 md:px-6 pt-8 md:pt-10 max-w-[1280px] mx-auto">
          <Link
            href="/missions"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-data)] text-xs text-[#5e5e5e] uppercase tracking-[1.4px] hover:text-[#034694] transition-colors"
          >
            ← Back_to_Missions
          </Link>
        </div>

        {/* ── Project Identity Header ── */}
        <section className="px-4 md:px-6 pt-8 md:pt-10 pb-10 md:pb-12 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
            {/* Diamond logo — matches Figma */}
            <div className="w-28 h-28 bg-black border-[6px] border-black shadow-[6px_6px_0px_0px_#034694] flex items-center justify-center shrink-0">
              <div className="border-4 border-[#034694] w-14 h-14 rotate-45 flex items-center justify-center">
                <div className="w-3.5 h-3.5 bg-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-[family-name:var(--font-data)] text-sm text-[#034694] mb-3 tracking-[2px] uppercase">
                [ {project.ref} ] · {project.sector}
              </div>
              <h1
                className="font-[family-name:var(--font-display)] font-bold text-black uppercase leading-[1] tracking-[-4px] mb-4"
                style={{ fontSize: "clamp(48px, 6vw, 96px)" }}
              >
                {project.title}
              </h1>
              <div className="flex items-center gap-2">
                <div className={`${project.dotColor} w-2.5 h-2.5`} />
                <span className="font-[family-name:var(--font-data)] text-[#5e5e5e] text-xs uppercase tracking-[1.5px]">
                  {project.meta}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Video Player ── */}
        <VideoPlayer
          videoUrl={project.video}
          projectTitle={project.title}
          projectTag={project.tag}
        />

        {/* ── Description + Motivation ── */}
        <section className="px-4 md:px-6 mb-10 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-l-[4px] border-black pl-6">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-black text-xl uppercase mb-3 tracking-tight">
              Description
            </h2>
            <p className="text-lg leading-snug text-[#434751]">{project.desc}</p>
          </div>
          <div className="border-l-[4px] border-black pl-6">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-black text-xl uppercase mb-3 tracking-tight">
              Motivation
            </h2>
            <p className="text-lg leading-snug text-[#434751]">{ext.motivation}</p>
          </div>
        </section>

        {/* ── Action Buttons ── */}
        <section className="px-4 md:px-6 mb-16 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={ext.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border-[4px] border-black p-4 font-[family-name:var(--font-display)] font-bold text-lg uppercase shadow-[4px_4px_0px_0px_black] flex items-center justify-center gap-3 hover:bg-[#f0f0f0] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            GITHUB_SOURCE ↗
          </a>
          {ext.live ? (
            <a
              href={ext.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#034694] text-white border-[4px] border-black p-4 font-[family-name:var(--font-display)] font-bold text-lg uppercase shadow-[8px_8px_0px_0px_black] flex items-center justify-center gap-3 hover:brightness-110 transition-all active:translate-x-2 active:translate-y-2 active:shadow-none"
            >
              LIVE_DEPLOYMENT ↗
            </a>
          ) : (
            <div className="border-[4px] border-dashed border-[#d4d4d4] p-4 flex items-center justify-center">
              <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-[2px] text-[#a3a3a3]">
                NO_LIVE_DEPLOYMENT
              </span>
            </div>
          )}
        </section>

        {/* ── Technical Whitepaper ── */}
        <section className="relative py-20">
          <BackgroundRippleEffect />
          <div className="relative z-10 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="bg-white border-[4px] border-black p-8 md:p-14 shadow-[8px_8px_0px_0px_black]">

              {/* Doc header */}
              <div className="border-b-[4px] border-black pb-6 md:pb-8 mb-6 md:mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 md:gap-6">
                <div>
                  <div className="font-[family-name:var(--font-data)] text-xs uppercase text-[#034694] mb-2">
                    Technical Report // Ref: {ext.whitepaper.ref}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-black text-2xl md:text-3xl uppercase tracking-tighter">
                    {ext.whitepaper.title}
                  </h3>
                </div>
                <div className="font-[family-name:var(--font-data)] text-[10px] leading-loose uppercase shrink-0 sm:text-right">
                  CLASSIFIED<br />TANAY_MATTA
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 text-base leading-relaxed text-[#404040]">
                <div>
                  <div className="font-[family-name:var(--font-data)] text-xs font-bold uppercase border-b-2 border-black/10 inline-block mb-3">
                    Abstract
                  </div>
                  <p>{ext.whitepaper.abstract}</p>
                </div>

                <div>
                  <div className="font-[family-name:var(--font-data)] text-xs font-bold uppercase border-b-2 border-black/10 inline-block mb-3">
                    System Architecture
                  </div>
                  <p>{ext.whitepaper.architecture}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="font-[family-name:var(--font-data)] text-xs font-bold uppercase border-b-2 border-black/10 inline-block mb-4">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="font-[family-name:var(--font-data)] text-[#034694] border-2 border-[#034694] bg-[#034694]/5 px-3 py-1 text-xs uppercase tracking-[0.5px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Doc footer */}
              <div className="mt-10 md:mt-12 pt-4 border-t-2 border-black/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 font-[family-name:var(--font-data)] text-[10px] uppercase text-[#a3a3a3]">
                <span>TANAY_MATTA // ENGINEERING REPORTS</span>
                <span>REF: {ext.whitepaper.ref}</span>
              </div>

              {/* Download button */}
              {project.report ? (
                <a
                  href={project.report}
                  download
                  className="mt-8 w-full bg-black text-white border-[4px] border-black p-4 font-[family-name:var(--font-display)] font-bold text-base uppercase shadow-[6px_6px_0px_0px_#034694] flex items-center justify-center gap-3 hover:bg-[#1a1a1a] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0 0l-4-4m4 4l4-4M3 21h18" />
                  </svg>
                  DOWNLOAD_REPORT
                </a>
              ) : (
                <div className="mt-8 w-full border-[4px] border-dashed border-[#d4d4d4] p-4 flex items-center justify-center gap-3">
                  <svg className="w-4 h-4 text-[#a3a3a3]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0 0l-4-4m4 4l4-4M3 21h18" />
                  </svg>
                  <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-[2px] text-[#a3a3a3]">
                    NO_REPORT_AVAILABLE
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
