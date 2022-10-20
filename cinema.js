const catalogo = require('./database/catalogo.json')
/*

console.log(catalogo.map((filme) => {
    return filme.titulo
}))

console.log(catalogo.filter((filme) => filme.emCartaz === true))

console.log(catalogo.reduce((acc, item) =>{
    return acc + item.duracao
}, 0))

catalogo.forEach((filme) => {
    console.log(filme.titulo)
})*/

// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)
/* function
function listarTodosOsFilmesEmCartaz() {
    for(let i = 0; i < catalogo.length; i++) {
        console.log(catalogo[i].titulo)
    }
}
*/
// arrow function
// let listarTodosOsFilmesEmCartaz = () => {
//     for(let i = 0; i < catalogo.length; i++) {
//         console.log(catalogo[i].titulo)
//     }
// }

const listarTodosOsFilmesEmCartaz = () => {
    // catalogo.forEach(catalogo) => console.log(`Nome do filme: $(filme.titulo)`)
}

// buscar um filme especifico pelo código dele (buscarFilme) -> parametro: codigo

//function
// function buscarFilme(codigo) {
//     for(let i = 0; i < catalogo.length; i++) {
//         if(catalogo[i].codigo === codigo) {
//             return catalogo[i].titulo
//         }
//     }
// }

const buscarFilme = (codigo) => catalogo.find((filme) => filme.codigo == codigo)

// alterar o status de emCartaz (true -> false e se esiver false -> true)
// (alterarStatusEmCartaz) -> parametro: codigo

const alterarStatusEmCartaz = (codigo, callback) => {
    let filme = callback(codigo)
    
    if (!filme) {
        console.log("Filme not found")
        return null;
    }
    // filme.emCartaz == true ? filme.emCartaz = false : filme.emCartaz = true;
    filme.emCartaz = !filme.emCartaz;
    return filme
}

// adicionar um novo filme no nosso catalogo (adicionarFilme)
// parametro: filme: { codigo, titulo, atores, duracao, anoDeLancamento }
const adicionarFilme = (filme) => {
    // const { codigo, titulo, atores, duracao, anoDeLancamento } = filme;
    const filmeParaAdicionar = {
        ...filme,
        emCartaz: true
    }
    catalogo.push(filmeParaAdicionar)

    return filmeParaAdicionar;
}

adicionarFilme({
    codigo: '6',
    titulo: 'O poderoso chefão',
    atores: ["", "", ""],
    duracao: 3.5,
    anoDeLancamento: 1922
})

// listar os filmes com duracao maior que 2h (listarFilmescomLongaDuracao) -> filter

const listarFilmescomLongaDuracao = () => {
    return catalogo.filter((filme) => filme.duracao > 2)
}

console.log('Olá')