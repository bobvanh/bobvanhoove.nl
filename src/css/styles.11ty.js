const path = require("path");
const fs = require("fs");

module.exports = class {
    async data() {
        return {
            permalink: '/css/main.css',
            eleventyExcludeFromCollections: true,
            // TODO : This is a janky way to get to the node_modules, figure out something better
            sourceFile: path.join(__dirname, '..', '..', 'node_modules', 'purecss', 'build', 'pure-min.css')
        };
    }

    async render({ sourceFile }) {
        //console.log(sourceFile);
        var source = fs.readFileSync(sourceFile);
        //console.log(source);
        return source.toString();
    }
}