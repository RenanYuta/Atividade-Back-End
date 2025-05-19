numeros = [1, 2, 3, 4]
console.log(numeros);

function modificarArray() {
    numeros.splice(2,1,6)
    console.log(numeros);
    numeros.splice(2,1, 5);
    console.log(numeros)
}
modificarArray()