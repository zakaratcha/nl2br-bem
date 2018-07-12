const assert = require('assert');
const nl2brX = require('..');

describe('nl2br-x', function() {
    it('should replace new line sequence with br', function() {
        assert.deepEqual(nl2brX('hello,\nBEM!'), ['hello,', {tag: 'br'}, 'BEM!']);
    });

    it('should replace new line sequence with br', function() {
        assert.deepEqual(nl2brX('hello,\nBEM!\nmoar'),
            ['hello,', {tag: 'br'}, 'BEM!', {tag: 'br'}, 'moar']);
    });

    it('should not add br in the end of the string', function() {
        assert.deepEqual(nl2brX('hello, BEM!'), ['hello, BEM!']);
    });

    it('should drop empty lines', function() {
        assert.deepEqual(nl2brX('\nhello,\n   \nBEM!\n\n \n ', true), ['hello,', {tag: 'br'}, 'BEM!']);
    });

    it('should not drop empty lines if it not asked', function() {
        assert.deepEqual(nl2brX('\nhello,\n   \nBEM!\n\n \n '), [
            '',
            {tag: 'br'},
            'hello,',
            {tag: 'br'},
            '   ',
            {tag: 'br'},
            'BEM!',
            {tag: 'br'},
            '',
            {tag: 'br'},
            ' ',
            {tag: 'br'},
            ' '
        ]);
    });


});
