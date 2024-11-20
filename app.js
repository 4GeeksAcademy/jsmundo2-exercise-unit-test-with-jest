// Declaramos una funcion con el nombre exacto
const fromYenToPound = function(valueInYenTo) {
    // convertimos el valor a Pound
    let valueInPound = valueInYenTo * 0.87;
    // Retornamos el valor en 
    return valueInPound;
}
// Declaramos una funcion con el nombre exacto
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a Yen
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en ToYen
    return valueInYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };