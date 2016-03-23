/* global describe it expect assert*/

//var brutusin = require('./src/js/brutusin-json-forms');
//console.log(9, typeof brutusin);

describe('Testing as node module', function () {
    it('should work with require()', function () {
        "use strict";

        expect(typeof brutusin).to.equal('object');
    });


});
