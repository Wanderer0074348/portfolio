import Link from "next/link";
import type { BlogPost } from "@/lib/blogs";

const ArrowIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="block group h-full">
      <article className="bg-white border-[4px] border-black flex flex-col shadow-[8px_8px_0px_0px_black] p-1 isolate group-hover:shadow-[12px_12px_0px_0px_black] transition-shadow h-full">
        <div className="border-b-[4px] border-black bg-[#f3f3f3] relative">
          <div className="h-[140px] md:h-[160px] flex flex-col justify-between p-5">
            <div className="flex items-center justify-between">
              <div className="bg-black px-2 py-1">
                <span className="font-[family-name:var(--font-data)] font-bold text-[#034694] text-xs uppercase tracking-[1px]">
                  {post.tag}
                </span>
              </div>
              <div className="bg-[#034694] size-3" />
            </div>
            <div className="font-[family-name:var(--font-code)] text-[#737373] text-[10px] uppercase tracking-[1.5px]">
              // {post.ref}
            </div>
          </div>
        </div>
        <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
          <div className="flex items-center justify-between">
            <span className="font-[family-name:var(--font-data)] font-bold text-[#5e5e5e] text-xs tracking-[-0.6px] uppercase">
              {post.date}
            </span>
            <span className="font-[family-name:var(--font-data)] text-[#a3a3a3] text-xs uppercase">
              {post.readTime}
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1a1c1c] text-2xl md:text-[28px] tracking-[-1px] md:tracking-[-1.4px] uppercase leading-tight">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="font-sans text-[#5e5e5e] text-sm leading-6 line-clamp-3">
              {post.excerpt}
            </p>
          )}
          <div className="border-t-[4px] border-black pt-5 md:pt-6 flex items-center justify-between mt-auto">
            <span className="font-[family-name:var(--font-data)] font-bold text-[#1a1c1c] text-xs tracking-[1.2px] uppercase">
              Read_Log
            </span>
            <span className="size-4 text-[#1a1c1c]"><ArrowIcon /></span>
          </div>
        </div>
      </article>
    </Link>
  );
}
