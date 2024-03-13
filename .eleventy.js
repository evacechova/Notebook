module.exports = function(eleventyConfig) {
    
    eleventyConfig.setServerOptions({
        showAllHosts: true,
    });
    // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do _site/images
    //eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("src/css");

   return {
    dir: {
        input: "src",
        output: "build"
    },
    // možné formáty šablon
    templateFormats: ["njk", "html", "md"],
    // jako šablonovací jazyk zvolíme Nunjucks`
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
};
