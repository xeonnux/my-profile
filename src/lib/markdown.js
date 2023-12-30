import markdownToHtml from "./markdownToHtml";

export const renderMarkdown = async () => {
  return await markdownToHtml(markdownContent || '');
};