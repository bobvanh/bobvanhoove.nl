module.exports = config => {
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/css/');
    config.addWatchTarget('./src/css/');

    config.addPassthroughCopy({'./node_modules/picnic/picnic.min.css': 'css/picnic.min.css'});

    return {
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir : {
            input: "src",
            output: "_site"
        }
    };
};