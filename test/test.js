'use strict';
const Nightmare = require('nightmare');
const should = require('chai').should();

describe('base64 to File', function () {
  this.timeout(15000);
  it('should okay', function (done) {
    new Nightmare().goto('./test.html').evaluate(function () {
      return document.getElementById('answer')
    }, function (result) {
      result.should.equal('okay');
      done();
    }).run();
  });
});
