const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turnDownService = new TurndownService();

  // 1. Convert markdown to html
  const convertedHtml = marked.parse(markdownContent);
  console.log("converted html", convertedHtml);

  // 2. Sanitize html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"]),
  });

  console.log("sanitized html", sanitizedHtml);

  // 3. Convert the sanitized html back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  console.log("sanitized markdown", sanitizedMarkdown);

  return sanitizedMarkdown;
}

// As we are taking description of the problem in markdown so it may contains malicious script tag
// so it is important to sanitize the markdown

module.exports = sanitizeMarkdownContent;
