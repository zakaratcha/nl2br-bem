# nl2br-bemxjst

JS module for converting newlines to line breaks in BEMHTML and BEMTREE syntaxe

## Install

```
$ npm install nl2br-bemxjst
```
## Example
```javascript
const nl2brX  = require('nl2br-bemxjst');
console.log(nl2brX(`Hello
world
!!!`)); // ['Hello', {tag: 'br'}, 'world', {tag: 'br'}, '!!!']
