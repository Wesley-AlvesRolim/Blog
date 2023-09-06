import markdownLib from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/base16/ros-pine-moon.css";

export const markdownToHtml = (markdown: string) => {
  const md = markdownLib({
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `
            <pre class="hljs"><code>${
              hljs.highlight(str, { language: lang, ignoreIllegals: true })
                .value
            }</code>
						</pre>
						`;
        } catch (__) {}
      }

      return "";
    },
  });

  return md.render(markdown);
};
