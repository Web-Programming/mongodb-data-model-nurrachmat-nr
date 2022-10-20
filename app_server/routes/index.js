var express = require('express');
var router = express.Router();

//import controller
const ctrlMain = require("../controllers/main")

 //routes
/* GET home page. */
router.get('/', ctrlMain.index);
/* GET demo page. */
router.get("/demo", ctrlMain.demo);
module.exports = router;
