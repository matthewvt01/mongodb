var express = require("express");
const { route } = require("../../app");
var router = express.Router();

//import controller
var ctrlMhs = require("../controllers/mahasiswa");

//daftarkan routes
//https://localhost:3000/mahasiswa -> get -> all data mhs
router.route("/mahasiswa")
      .get(ctrlMhs.mhsList)
      .post(ctrlMhs.mhsCreate);


module.exports = router;