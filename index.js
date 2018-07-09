(function () {
    var br = {tag: 'br'};
    var nlRegEx = /[(\r\n)|(\n\r)|\r|\n]+/g;
    
    /**
     * Converting newlines to line breaks object in BEMJSON syntaxe
     * 
     * @param str {string}
     * @returns {array}
     */
    function nl2brX(str) {
        var arr = str.split(nlRegEx);
        var resArr = [arr[0]];

        for (var i = 1; i < arr.length; i++) {
            resArr.push(br);
            resArr.push(arr[i]);
        }

        return resArr;
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
