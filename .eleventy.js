module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());

  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/articles/*.md").sort((a, b) => {
      return a.inputPath.localeCompare(b.inputPath);
    });
  });

  // Homepage grid rows: each article names which visual row it belongs to
  // via its `row` number (matching frontmatter field `row`), so the exact
  // grouping/order laid out in the crop-and-size playground tool can be
  // reproduced exactly. Articles with a `cover` field render full-bleed,
  // uncropped, at a locked equal width; everything else is a cropped
  // story tile whose relative width comes from its `width` field
  // (defaults to 1) and whose row gets its height from ROW_HEIGHTS below.
  eleventyConfig.addCollection("homeRows", function (collectionApi) {
    const articles = collectionApi.getFilteredByGlob("src/articles/*.md").sort((a, b) => {
      return a.inputPath.localeCompare(b.inputPath);
    });
    const ROW_HEIGHTS = { 2: 320, 3: 260, 5: 320 };

    const groups = new Map();
    articles.forEach((a) => {
      const n = a.data.row;
      if (!groups.has(n)) groups.set(n, []);
      groups.get(n).push(a);
    });

    return [...groups.keys()].sort((a, b) => a - b).map((n) => {
      const items = groups.get(n);
      const isCovers = items.every((a) => a.data.cover);
      return {
        type: isCovers ? "covers" : "stories",
        height: isCovers ? "auto" : (ROW_HEIGHTS[n] || 320),
        items,
      };
    });
  });

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
