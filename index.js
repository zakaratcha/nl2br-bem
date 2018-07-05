(function () {
    const nl2br = function (str) {
        const br = {tag: 'br'};

        return str.split(/[(\r\n)|(\n\r)|\r|\n]+/g).map((subStr, i) => i ? [br, subStr] : subStr);
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = nl2br;
    }

    if (typeof modules === 'object' && typeof modules.define === 'function') {
        modules.define('nl2br', function (provide) {
            provide(nl2br);
        });
    }
})();
