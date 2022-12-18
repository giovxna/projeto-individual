var express = require("express");
var router = express.Router();

var analyticsController = require("../controllers/analyticsController");

router.get("/analytics", function (req, res) {
  analyticsController.mostrarAnalytics(req, res);
});

module.exports = router;
