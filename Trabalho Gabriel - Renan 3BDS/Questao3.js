let pecas = ['motor', 'vela', 'pistao']
console.log(pecas)

function estoque() {
    pecas.unshift('marcha')
    pecas.pop()
}

estoque()
console.log(pecas)