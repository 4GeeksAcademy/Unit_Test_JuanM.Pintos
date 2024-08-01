const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const euros = fromEuroToDollar(1);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 1 * 1.07;

    // Hago mi comparación (la prueba)
    expect(euros).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("100 dolares son 14624 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(100)).toBe(14626.1682); 
})

test("1000 yenes son 5.5 libras esterlinas", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromYenToPound(1000);
// 1000 yenes son 6.3 euros, 6.3 euros * 0.87 son 5.5 libras
    const expected = 6.3 * 0.87;

    // Hago mi comparación (la prueba)
    expect(yenes).toBe(5.5591); 
})
