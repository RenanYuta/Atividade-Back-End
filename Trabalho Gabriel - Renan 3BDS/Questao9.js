let nomes = ['Renan Yuta', 'Nicolas', 'Felipe Henrique', 'Pyetro']
let i = verificarnome(nomes)
function verificarnome(nomes) {
    return nomes.find (nomes => nomes.length > 10)
}
console.log(i)

