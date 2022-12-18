var database = require("../database/config");

function mostrarAnalytics() {
  instrucaoSQL = `SELECT count(DISTINCT fk_usuario) AS 'afazeres' FROM listaAfazeres UNION SELECT count(id) AS usuarios FROM usuario;`;
  console.log("Executando a instrução SQL: \n" + instrucaoSQL);
  return database.executar(instrucaoSQL);
}

function publicarAnalytics(idUsuario) {
  var instrucao = `
      INSERT INTO comentario (titulo, descricao, fk_usuario) VALUES ('${titulo}', '${descricao}', ${idUsuario});
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  mostrarAnalytics,
  publicarAnalytics,
};
