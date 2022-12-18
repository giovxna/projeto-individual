var express = require("express");
var router = express.Router();

var comentarController = require("../controllers/comentarController");

router.get("/listar", function (req, res) {
  comentarController.listar(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
  comentarController.publicar(req, res);
});

module.exports = router;
