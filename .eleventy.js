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

  // Homepage grid rows: articles with a `cover` field become full-bleed
  // cover tiles grouped into their own rows; everything else is a story
  // tile. Rows alternate height for size variety, and cover/story rows
  // interleave (one cover row, then up to two story rows) so the grid
  // keeps its rhythm as articles are added or removed -- no manual
  // per-article row/size assignment needed.
  eleventyConfig.addCollection("homeRows", function (collectionApi) {
    const articles = collectionApi.getFilteredByGlob("src/articles/*.md").sort((a, b) => {
      return a.inputPath.localeCompare(b.inputPath);
    });
    const covers = articles.filter((a) => a.data.cover);
    const stories = articles.filter((a) => !a.data.cover);

    function chunk(arr, size) {
      const out = [];
      for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
      return out;
    }

    const coverRows = chunk(covers, 4).map((items, i) => ({
      type: "covers",
      height: i % 2 === 0 ? "tall" : "med",
      items,
    }));
    const storyRows = chunk(stories, 3).map((items, i) => ({
      type: "stories",
      height: i % 2 === 0 ? "cozy" : "short",
      items,
    }));

    const rows = [];
    let ci = 0, si = 0;
    while (ci < coverRows.length || si < storyRows.length) {
      if (ci < coverRows.length) rows.push(coverRows[ci++]);
      for (let n = 0; n < 2 && si < storyRows.length; n++) rows.push(storyRows[si++]);
    }
    return rows;
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
