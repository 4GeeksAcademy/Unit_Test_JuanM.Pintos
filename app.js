const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
    }

function fromDollarToYen(USD){
return USD * oneEuroIs.JPY;
}

function fromEuroToDollar(EUR){
    return EUR * oneEuroIs.USD;
}

function fromYenToPound(JPY){
    return JPY * oneEuroIs.GBP;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

