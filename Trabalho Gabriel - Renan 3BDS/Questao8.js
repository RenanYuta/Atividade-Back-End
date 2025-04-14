let livros = ['Livro1', 'Livro2', 'Livro4', 'Livro5', 'Livro6'];

verificar()
function verificar() {
    i = livros.indexOf('Livro3')
    if (i>0) {
        console.log(i);
    }
    else {
        console.log('Erro')
    }
}