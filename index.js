(function () {
    var br = {tag: 'br'};

    /**
     * Converting newlines to line breaks object in BEMJSON syntax
     * 
     * @param {string} str
     * @param {boolean} [dropEmptyLines]
     * @returns {array}
     */
    function nl2brX(str, dropEmptyLines) {
        var arr = str.split('\n');
        var resArr = [arr[0]];

        for (var i = 1; i < arr.length; i++) {
            if (!dropEmptyLines || arr[i].trim()) {
                resArr.push(br);
                resArr.push(arr[i]);
            }
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
