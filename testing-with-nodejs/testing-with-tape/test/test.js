const test = require('tape');

const calculator = require('../../calculator.js');

test("test add integers 2 and 2", (t) => {
    t.plan(1);
    t.equal(calculator.add(2, 2), 4);
});

test("test add strings 2 and 2", (t) => {
    t.plan(1);
    t.equal(calculator.add("2", "2"), 4);
});