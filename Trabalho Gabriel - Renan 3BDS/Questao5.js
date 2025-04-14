let eventos=['churrasco', 'festa', 'reuniao', 'jogos']
console.log(eventos);
remocao()

function insercao() {
    eventos.splice(1,0, 'aniversario')
    console.log(eventos)
}

function remocao() {
    eventos.splice(1,1)
    console.log(eventos)
}