import { marked } from "marked";

// marked v17 passes token objects to renderer methods (not strings).
// list(token)     — token.items is the array of listitem tokens
// listitem(token) — token.tokens are the inline tokens; use this.parser.parse()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
marked.use({
  renderer: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    list(token: any) {
      const body: string = token.items
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((item: any) => (this as any).listitem(item))
        .join("");
      return `<div class="terminal-list">${body}</div>`;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listitem(token: any) {
      const body: string = (this as any).parser.parse(token.tokens);

      // If the rendered body contains a link, wrap the whole item as a nav button
      const hrefMatch = body.match(/href="([^"]*)"/);
      if (hrefMatch) {
        const href = hrefMatch[1];
        const isExternal =
          href.startsWith("http") || href.startsWith("mailto:");
        // Strip nested <a> to avoid invalid nesting
        const innerText = body.replace(/<a [^>]*>|<\/a>/g, "");
        return (
          `<a href="${href}" class="terminal-list-btn"` +
          (isExternal ? ` target="_blank" rel="noopener noreferrer"` : "") +
          `>${innerText}</a>`
        );
      }

      return `<div class="terminal-list-item">${body}</div>`;
    },
  },
});

export { marked };
