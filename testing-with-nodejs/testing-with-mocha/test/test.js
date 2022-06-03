const assert = require("chai").assert;
const calculator = require("../../calculator");

describe("Calculator Test", () => {
    describe("add() Test", () => {
        it("add (2,2) should return 4", () => {
            assert.equal(calculator.add(2, 2), 4);
        });
        it("add ('2'','2') should return 4", () => {
            assert.equal(calculator.add('2', '2'), 4);
        });
    })
})