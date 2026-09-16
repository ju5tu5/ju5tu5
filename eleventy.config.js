import prettier from "prettier";
import rssPlugin from "@11ty/eleventy-plugin-rss";

export default async function (config) {
  config.addPassthroughCopy("./src/assets");
  config.addWatchTarget("./src/assets");

  config.setInputDirectory("src");
  config.setIncludesDirectory("includes");
  config.setOutputDirectory("build");
  config.setTemplateFormats(["html", "njk", "md"]);

  config.addTransform("prettier", (content, outputPath) =>
    outputPath.endsWith(".html")
      ? prettier.format(content, { parser: "html" })
      : content,
  );
  config.addCollection("menu", (collection) =>
    collection.getFilteredByGlob(["*/*.md", "*/*.html"]),
  );
  config.addShortcode("year", () => `${new Date().getFullYear()}`);
  config.addGlobalData("layout", "base.njk");

  config.addPlugin(rssPlugin);
}
