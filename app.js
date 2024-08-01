const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
function decimales(x) {
    return Number(x.toFixed(4))
}
//Euro a Dolar (100 euros son 107 dolares//
function fromEuroToDollar(EUR) {
    return EUR * oneEuroIs.USD;
}
//Dollar a Yen; 100 dolares son 93,45 euros, y 93,45 euros son 14.624 yenes //
function fromDollarToYen(USD) {
    let valueInYen = (USD / oneEuroIs.USD) * oneEuroIs.JPY

    return decimales(valueInYen);
}
// 1000 yenes son 6.3 euros y a su vez son 5.5 libras esterlina
function fromYenToPound(JPY) {
    let valueInPound = (JPY / oneEuroIs.JPY) * oneEuroIs.GBP
    return decimales(valueInPound);
}
console.log(fromYenToPound(1000))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
