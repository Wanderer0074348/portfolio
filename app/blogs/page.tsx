import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { getAllBlogs } from "@/lib/blogs";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "BLOGS // TANAY MATTA",
  description: "Field logs, technical notes, and notes-to-self by Tanay Matta.",
};

export default function BlogsPage() {
  const posts = getAllBlogs();

  return (
    <div className="bg-[#f9f9f9] flex flex-col min-h-screen">
      <Header />

      <main className="pt-28 md:pt-32 pb-20 px-4 md:px-6 max-w-[1280px] mx-auto w-full">

        {/* ── Hero ── */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-8 mb-10 md:mb-14">
          <div className="md:col-span-8 flex flex-col gap-4 justify-end">
            <div className="bg-[#034694] px-3 py-1 w-fit">
              <span className="font-[family-name:var(--font-data)] text-white text-xs tracking-[1.2px] uppercase">
                Field_Logs · Ongoing_Transmission
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-black text-[56px] sm:text-[80px] md:text-[104px] lg:text-[128px] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-5px] lg:tracking-[-6.4px] uppercase leading-[1]">
              Field_<br />Logs
            </h1>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end pl-0 md:pl-1 mt-4 md:mt-0">
            <p className="font-sans text-[#434751] text-base md:text-lg leading-7 md:text-right">
              Notes from the frontier.<br />
              {siteConfig.name} on {siteConfig.focus[0]},<br />
              {siteConfig.focus[1]},<br />
              and whatever else is loud that week.
            </p>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="border-y-[4px] border-black py-4 md:py-5 mb-8 md:mb-10 flex flex-wrap gap-4 md:gap-10 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-data)] text-[#737373] text-[10px] uppercase tracking-[1.5px]">Total_Logs</span>
              <span className="font-[family-name:var(--font-display)] font-bold text-black text-2xl md:text-3xl tabular-nums">
                {String(posts.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-data)] text-[#737373] text-[10px] uppercase tracking-[1.5px]">Status</span>
              <span className="font-[family-name:var(--font-display)] font-bold text-[#034694] text-2xl md:text-3xl">
                LIVE
              </span>
            </div>
          </div>
          <span className="font-[family-name:var(--font-code)] text-[#737373] text-xs tracking-[1.2px] uppercase">
            Author: {siteConfig.handle}
          </span>
        </div>

        {/* ── Posts grid ── */}
        {posts.length === 0 ? (
          <div className="border-[4px] border-dashed border-[#d4d4d4] p-12 md:p-20 flex flex-col items-center justify-center gap-3">
            <span className="font-[family-name:var(--font-data)] text-[#a3a3a3] text-xs uppercase tracking-[2px]">
              No_Logs_Yet
            </span>
            <span className="font-sans text-[#737373] text-sm">
              Transmission initializing. Check back soon.
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-10">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
