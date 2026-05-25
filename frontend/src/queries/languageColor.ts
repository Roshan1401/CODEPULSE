export const languageColors: Record<string, string> = {
  javascript: "#f7df1e",
  typescript: "#3178c6",
  python: "#3572A5",
  rust: "#dea584",
  go: "#00ADD8",
  css: "#563d7c",
  html: "#e34c26",
};

export const getLanguageColor = (lang: string): string => {
  return languageColors[lang.toLowerCase()] ?? "#888888";
};
