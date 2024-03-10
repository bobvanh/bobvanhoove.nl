module.exports = config => {
    config.addPassthroughCopy('./src/images/');
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