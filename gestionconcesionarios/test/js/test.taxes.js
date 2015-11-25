// Required modules
var taxes, chai;
try {
    taxes = require("../../js/taxes.js"),
    chai = require("chai");
} catch (e) {
    console.info("Required modules loaded");
}

// Functions to test
var calculateTax = taxes.calculateTax;

// BDD
chai.should();
// TDD 
var assert = chai.assert;

// The tests!
describe('Test taxes module', function() {
    context('Calculate Tax', function() {
        it('should evaluate to 10 when tax is 10% and price is 100', function() {
            calculateTax(10,100).should.be.equal(10);
        });
    });
});
