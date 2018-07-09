const assert = require('assert');
const nl2brX = require('..');

describe('nl2br-x', function() {
    it('should replace new line sequence with br', function() {
        assert.deepEqual(nl2brX('hello,\nBEM!'), ['hello,', {tag: 'br'}, 'BEM!']);
    });

    it('should replace new line sequence with br', function() {
        assert.deepEqual(nl2brX('hello,\r\nBEM!\r\nmoar'),
            ['hello,', {tag: 'br'}, 'BEM!', {tag: 'br'}, 'moar']);
    });

    it('should not add br in the end of the string', function() {
        assert.deepEqual(nl2brX('hello, BEM!'), ['hello, BEM!']);
    });
});
