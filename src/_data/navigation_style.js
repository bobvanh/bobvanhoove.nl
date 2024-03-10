// TODO : consider YAGNI, let's see
module.exports = {
    get(itemUrl, pageUrl) {
        if (itemUrl === pageUrl) {
            return 'aria-current="page"';
        }
        else if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
            return 'data-state="active"';
        }
        return '';
    }
}