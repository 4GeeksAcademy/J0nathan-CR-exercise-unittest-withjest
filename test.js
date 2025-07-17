const { sum, fromDollarToYen } = require('./app.js');

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
})



test("One euro should be 1.07 dollars", function () {

    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = dollars * oneEuroIs.USD;

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})


test("One dollar should be 146 yen", function () {

    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(1);

    const expected = yen * (oneEuroIs.JPY/oneEuroIs.USD);

    expect(Math.round(yen)).toBeCloseTo(146);
})


test("One yen should be 0.0050 british pound", function () {

    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(400);

    const expected = pound * (oneEuroIs.GBP/oneEuroIs.JPY);

    expect(Math.round(pound)).toBe(2);
})