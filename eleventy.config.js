export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/css");
  eleventyConfig.addPassthroughCopy("content/js");
  eleventyConfig.addPassthroughCopy("content/assets");
  eleventyConfig.addPassthroughCopy("content/*.{svg,ico,png,txt}");
}

export const config = {
  dir: { input: "content", output: "_site" },
};