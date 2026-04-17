import { Marked } from "marked";

const blogMarked = new Marked({ gfm: true, breaks: false, async: false });

export default function BlogMarkdown({ content }: { content: string }) {
  const html = blogMarked.parse(content) as string;
  return (
    <div
      className="markdown-blog"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
