var database = require("../database/config");

function listar() {
  instrucaoSQL = `SELECT titulo, descricao FROM comentario;`;
  console.log("Executando a instrução SQL: \n" + instrucaoSQL);
  return database.executar(instrucaoSQL);
}

function publicar(titulo, descricao, idUsuario) {
  var instrucao = `
      INSERT INTO comentario (titulo, descricao, fk_usuario) VALUES ('${titulo}', '${descricao}', ${idUsuario});
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listar,
  publicar
};
