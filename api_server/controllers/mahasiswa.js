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
    mahasiswa.create(
        {
            npm: req.body.npm,
            nama: req.body.nama,
            tgl_lahir: req.body.tgl_lahir,
            hobi: req.body.hobi
        }, (err, result) => {
            if (err) {
                res
                .status(400)
                .json(err);
            } else {
                res
                .status(201)
                .json(result);
            }
        });
};

const mhsReadOne = (req, res) => {
    mahasiswa
        .findById(req.params.id)
        .exec((err, mhs) => {
            res
            .status(200)
            .json(mhs);
        });
};

const mhsUpdateOne = (req, res) => {
    mahasiswa
        .findById(req.params.id)
        .exec((err, mhs) => {
            mhs.npm = req.body.npm;
            mhs.nama = req.body.nama;
            mhs.tgl_lahir = req.body.tgl_lahir;
            mhs.hobi = req.body.hobi;
            mhs.save((err, result) => {
                if (err) {
                    res
                    .status(404)
                    .json(result);
                } else {
                    res
                    .status(200)
                    .json(result);
                }
            });
        });
};

const mhsDeleteOne = (req, res) => {
    mahasiswa
        .findById(req.params.id)
        .exec((err, mhs) => {
            mhs.remove((err, result) => {
                if (err) {
                    res
                    .status(404)
                    .json(err);
                }
                res
                .status(204)
                .json(null);
            });
        });
};

module.exports = {
    mhsList,
    mhsCreate,
    mhsReadOne,
    mhsUpdateOne,
    mhsDeleteOne
}