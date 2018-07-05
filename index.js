(function () {
    var nl2brX = function (str) {
        var br = {tag: 'br'};

        return str.split(/[(\r\n)|(\n\r)|\r|\n]+/g).map((subStr, i) => i ? [br, subStr] : subStr);
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = nl2brX;
    }

    if (typeof modules === 'object' && typeof modules.define === 'function') {
        modules.define('nl2brX', function (provide) {
            provide(nl2brX);
        });
    }
})();
