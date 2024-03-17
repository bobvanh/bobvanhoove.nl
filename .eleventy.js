module.exports = config => {
    config.addPassthroughCopy('./src/images/');
    
    // TODO : Avoid copying styles.11ty.js
    config.addPassthroughCopy('./src/css/');
    config.addWatchTarget('./src/css/');

    return {
        templateFormats: ["md", "njk", "html", "11ty.js"],
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir : {
            input: "src",
            output: "_site"
        }
    };
};