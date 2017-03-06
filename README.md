# js-type-convert
convert js many types without stackoverflow!

##Install
`npm install --save js-type-convert`

##Uasge
The babel is the es5 file.If you want to use es6,please index.js.

**notice**: this model only can be used in browser.

`<script src="node_modules/js-type-convert/babel.js"></script>`

###Base64 to JS File

eg.
```js
  var base64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
  var contentType = 'image/png';

  var testFile = jsTypeConvert.base64ToFile(base64Data, {
    contentType,
    fileName: 'biu'
  });
  // File {name: "biu", lastModified: 1488800879049, lastModifiedDate: Mon Mar 06 2017 19:47:59 GMT+0800 (CST), ...}
```
