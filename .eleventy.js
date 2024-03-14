module.exports = function(eleventyConfig) {
    
    eleventyConfig.setServerOptions({
        showAllHosts: true,
    });
    // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do build/images
    //eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat css/ to build/css/
    eleventyConfig.addPassthroughCopy("src/css");
    //Zkopírovat .js do build/js
    eleventyConfig.addPassthroughCopy("src/js");

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
