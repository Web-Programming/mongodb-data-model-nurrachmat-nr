const mongoose = require("mongoose");
//require("../models/mahasiswa"); //kika tidak dipanggil dari db.js
let mahasiswa = mongoose.model("Mahasiswa");
const mhsList = (req, res) => {
    mahasiswa.find({}, 
        function(err, result) {
            if (err) {
                res.status(500)
                    .json({"status" : "failed"});
            } else {
                res.status(200)
                .json(
                    {
                        "status":"success",
                        "data":result
                    });
            }
        });
};

const mhsCreate = (req, res) => {

};

const mhsReadOne = (req, res) => {

};

const mhsUpdateOne = (req, res) => {

};

const mhsDeleteOne = (req, res) => {

};

module.exports = {
    mhsList,
    mhsCreate,
    mhsReadOne,
    mhsUpdateOne,
    mhsDeleteOne
}