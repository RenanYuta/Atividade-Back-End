let matriz = [
    [1,2,3],
    [2,4,5],
    [3,5,6]
]

function printarMatriz() {
    console.log('') 
    for (let i = 0; i < matriz.length; i++) {
        let linha = ''
        for (let l = 0; l < matriz[i].length; l++) {
            linha += matriz[i] [l] + '  ';
        }
        console.log(linha)
    }
}

printarMatriz()