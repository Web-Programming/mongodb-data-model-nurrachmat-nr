var express = require("express");
var router = express.Router();

//import controller
var ctrlMhs = require("../controllers/mahasiswa");

//daftarkan routes
//http://localhost:3000/api/mahasiswa -> get -> all data mhs
//http://localhost:3000/api/mahasiswa -> post -> insert data mhs
router.route("/mahasiswa")
      .get(ctrlMhs.mhsList)
      .post(ctrlMhs.mhsCreate);

module.exports = router;