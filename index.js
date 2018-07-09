(function () {
    var br = {tag: 'br'};
    var nlRegEx = /[(\r\n)|(\n\r)|\r|\n]+/g;

    function nl2brX(str) {
        return str.split(nlRegEx)
            .reduce(function (acc, item, idx, arr) {
                acc.push(item);

                if (idx < arr.length - 1)  {
                    acc.push(br);
                }

                return acc;
            }, []);
    }

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = nl2brX;
    }

    if (typeof modules === 'object' && typeof modules.define === 'function') {
        modules.define('nl2br-x', function (provide) {
            provide(nl2brX);
        });
    }
})();
