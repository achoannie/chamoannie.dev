export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("favicon.*");
}

export const config = {
  dir: { input: "content", output: "_site" },
};