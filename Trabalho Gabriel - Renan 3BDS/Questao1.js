let carrinho = [ 'alface', 'tomate', 'pepino' , 'banana', 'manga'];
let i = carrinho.length - 1;  //O .length irá contarbilizar a quantidade de itens que será subtraída por 1 para se ajustar a posição do Array
console.log(carrinho);

carrinho.splice(i, 1, 'cenoura');
console.log(carrinho);