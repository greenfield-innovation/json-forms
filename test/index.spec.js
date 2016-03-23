/* global describe it expect assert*/

var BrutusinForms = require('../src/js/brutusin-json-forms');

var demos = require('./data/test.schema.draft3.json');


describe('Testing as node module', function () {
    it('should work with require()', function () {
        "use strict";
        expect(typeof BrutusinForms).to.equal('object');
    });

    it('should accept JSON and create a form', function(){
        "use strict";
        var schema = demos['numeric'];
        var form = BrutusinForms.create(schema);
        expect(typeof form).to.equal('object');

    });



});



//TODO:
//  "Objects, arrays, enums, default, required, minItems"
//"Example covering several common features"
// "Example of a form created with initial data preloaded. Same schema as the previous example."],
//  "[String validation](http://json-schema.org/latest/json-schema-validation.html#anchor25) supporting `minLength`, `maxLength`, and `pattern`"],
//  "Both object and boolean typed [additionalProperties](http://json-schema.org/latest/json-schema-validation.html#anchor64) are supported. Also, notice the support of the validation keywords `minProperties` and `maxProperties`"],

//  "`oneOf` types support in schemas"
//  "`textarea` rendering for `string` schemas"],
// ["Custom string formats",
// "Input types can be chosen for custom `string` schema formats via `BrutusinForms.bootstrap.addFormatDecorator(...)`. See current registered decorators at this page source code."]
