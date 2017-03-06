'use strict';

(function (con) {
  var base64ToBlob = function base64ToBlob(base64Data) {
    var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;

    var byteCharacters = atob(base64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  var blobToFile = function blobToFile(blobData, fileName) {
    return new File([blobData], fileName, {
      lastModifiedDate: Date.now(),
      type: blobData.type
    });
  };

  var base64ToFile = function base64ToFile(base64Data, options) {
    options = Object.assign({
      contentType: '',
      fileName: 'file'
    }, options);
    return blobToFile(base64ToBlob(base64Data, options.contentType), options.fileName);
  };

  con.jsTypeConvert = {
    base64ToBlob: base64ToBlob,
    blobToFile: blobToFile,
    base64ToFile: base64ToFile
  };
})(typeof module !== 'undefined' && module.exports ? module.exports : typeof window !== 'undefined' ? window : undefined);
