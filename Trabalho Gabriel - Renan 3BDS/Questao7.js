let jogadores = ['jogador1', 'jogador2', 'jogador3', 'jogador4']
console.log(jogadores);

partida()
partida()
partida()
partida()

function partida() {
    if (jogadores.length < 3) {
        jogadores.push('jogador5')
        console.log(jogadores)
    }
    else {
        jogadores.shift()
        console.log(jogadores)
    }
}