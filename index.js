(function () {
    var nl2brX = function (str) {
        var br = {tag: 'br'};
        var arr = str.split(/[(\r\n)|(\n\r)|\r|\n]+/g);
        var resArr = [arr[0]];

        for (var i = 1; i < arr.length; i++) {
            resArr.push(br);
            resArr.push(arr[i]);
        }

        return resArr;
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
