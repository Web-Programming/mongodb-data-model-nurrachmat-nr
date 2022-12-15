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

//http://localhost:3000/api/mahasiswa/123 -> get -> get dataa mhs by id
//http://localhost:3000/api/mahasiswa/123 -> put -> update data mhs
//http://localhost:3000/api/mahasiswa/123 -> delete -> update data mhs
router.route("/mahasiswa/:id")
      .get(ctrlMhs.mhsReadOne)
      .put(ctrlMhs.mhsUpdateOne)
      .delete(ctrlMhs.mhsDeleteOne);

var ctrlAuth = require("../controllers/authentication");
//buat router
//http://localhost:3000/api/register
//http://localhost:3000/api/login
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;