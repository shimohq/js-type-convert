'use strict';
const Nightmare = require('nightmare');
const should = require('chai').should();
const path = require('path');

describe('base64 to File', function () {
  this.timeout(15000);
  it('should okay', function (done) {
    new Nightmare()
      .goto('file://' + path.join(__dirname, 'test.html'))
      .evaluate(function () {
        return document.getElementById('answer').innerHTML;
      })
      .end()
      .then(content => {
        content.should.equal('okay');
      })
      .then(done)
      .catch(done);
  });
});
