let bancoDeDados = require('./users.json');

const listarUsuariosMaioresDeIdade = () => {
    return bancoDeDados.filter((usuario) => usuario.idade >= 18);
}

console.log('Lista de usuários acima de 18: ', listarUsuariosMaioresDeIdade());