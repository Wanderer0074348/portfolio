import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogMarkdown from "../../components/BlogMarkdown";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { siteConfig } from "@/lib/config";

export function generateStaticParams() {
  return getAllBlogs().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Log Not Found" };
  return {
    title: `${post.title} // TANAY MATTA`,
    description: post.excerpt || `Field log by ${siteConfig.name}`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <div className="bg-[#f9f9f9] flex flex-col min-h-screen">
      <Header />

      <main className="pt-20 md:pt-24">

        {/* ── Back nav ── */}
        <div className="px-4 md:px-6 pt-8 md:pt-10 max-w-[900px] mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-data)] text-xs text-[#5e5e5e] uppercase tracking-[1.4px] hover:text-[#034694] transition-colors"
          >
            ← Back_to_Logs
          </Link>
        </div>

        {/* ── Post identity header ── */}
        <header className="px-4 md:px-6 pt-8 md:pt-10 pb-10 md:pb-12 max-w-[900px] mx-auto">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-[#034694] px-3 py-1">
                <span className="font-[family-name:var(--font-data)] text-white text-[10px] tracking-[2px] uppercase">
                  {post.tag}
                </span>
              </div>
              <span className="font-[family-name:var(--font-data)] text-[#5e5e5e] text-xs uppercase tracking-[1.5px]">
                {post.ref}
              </span>
              <span className="font-[family-name:var(--font-data)] text-[#a3a3a3] text-xs uppercase">
                · {post.readTime}
              </span>
            </div>

            <h1
              className="font-[family-name:var(--font-display)] font-bold text-black uppercase leading-[1.02] tracking-[-3px]"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 pt-2 border-t-[4px] border-black">
              <span className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-xs tracking-[1.2px] uppercase pt-3">
                {post.date}
              </span>
              <span className="font-[family-name:var(--font-code)] text-[#a3a3a3] text-xs uppercase pt-3">
                //
              </span>
              <span className="font-[family-name:var(--font-code)] text-[#737373] text-xs tracking-[1.2px] uppercase pt-3">
                Author: {siteConfig.name}
              </span>
            </div>
          </div>
        </header>

        {/* ── Post body ── */}
        <section className="px-4 md:px-6 pb-16 max-w-[900px] mx-auto">
          <article className="bg-white border-[4px] md:border-[6px] border-black p-6 sm:p-10 md:p-14 shadow-[8px_8px_0px_0px_black]">
            {post.excerpt && (
              <p className="font-[family-name:var(--font-display)] text-[#434751] text-lg md:text-xl leading-8 border-l-[6px] border-[#034694] pl-5 mb-8 md:mb-10 italic">
                {post.excerpt}
              </p>
            )}
            <BlogMarkdown content={post.content} />
          </article>
        </section>

        {/* ── End-of-log footer ── */}
        <section className="px-4 md:px-6 pb-20 max-w-[900px] mx-auto">
          <div className="bg-black border-l-[6px] md:border-l-[8px] border-[#034694] pl-6 md:pl-10 pr-4 md:pr-8 py-6 md:py-8 flex flex-col gap-4 shadow-[8px_8px_0px_0px_black]">
            <div className="flex gap-2 items-center">
              <div className="bg-[#ef4444] rounded-full size-3" />
              <div className="bg-[#eab308] rounded-full size-3" />
              <div className="bg-[#22c55e] rounded-full size-3" />
              <span className="font-[family-name:var(--font-code)] text-[#737373] text-xs uppercase ml-4">
                end_of_log.txt
              </span>
            </div>
            <p className="font-[family-name:var(--font-code)] text-[#034694] text-sm leading-6">
              &gt; TRANSMISSION_COMPLETE — {post.ref}
            </p>
            <p className="font-[family-name:var(--font-code)] text-[#a3a3a3] text-sm leading-6">
              Signed off by {siteConfig.handle} // {post.date}
            </p>
            <div className="flex flex-wrap gap-6 pt-2">
              <Link
                href="/blogs"
                className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-sm tracking-[1.4px] uppercase hover:text-white transition-colors"
              >
                ← All_Logs
              </Link>
              <Link
                href="/missions"
                className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-sm tracking-[1.4px] uppercase hover:text-white transition-colors"
              >
                See_Missions →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
