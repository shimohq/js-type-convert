'use strict';

(function (con) {
  const base64ToBlob = (base64Data, contentType='', sliceSize=512) => {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];
    
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      
      byteArrays.push(byteArray);
    }
    
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  const blobToFile = (blobData, fileName) => {
    return new File([blobData], fileName, {
      lastModifiedDate: Date.now(),
      type: blobData.type
    });
  }

  const base64ToFile = (base64Data, options) => {
    options = Object.assign({
      contentType: '',
      fileName: 'file'
    }, options);
    return blobToFile(base64ToBlob(base64Data, options.contentType), options.fileName);
  }

  con.jsTypeConvert = {
    base64ToBlob,
    blobToFile,
    base64ToFile
  }
})((typeof module !== 'undefined' && module.exports) ? module.exports : (typeof window !== 'undefined') ? window : this);