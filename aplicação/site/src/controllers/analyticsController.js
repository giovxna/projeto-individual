var comentarModel = require("../models/analyticsModel");

function mostrarAnalytics(req, res) {
  comentarModel
    .mostrarAnalytics()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function publicarAnalytics(req, res) {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  var idUsuario = req.params.idUsuario;

  if (titulo == undefined) {
    res.status(400).send("O título está indefinido!");
  } else if (descricao == undefined) {
    res.status(400).send("A descrição está indefinido!");
  } else if (idUsuario == undefined) {
    res.status(403).send("O id do usuário está indefinido!");
  } else {
    comentarModel
      .publicarAnalytics(idUsuario)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  mostrarAnalytics,
  publicarAnalytics,
};
