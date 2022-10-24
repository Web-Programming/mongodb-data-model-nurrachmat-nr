const mongoose = require("mongoose");

//1. Buat Schema
const mhsSchema = new mongoose.Schema({
    npm: String,
    nama: String,
    tgl_lahir: Date, //yyyy-mm-dd
    hobi: [String] // ['Ngoding', 'Tidur', 'Mandi']
});

//2. Buat Model (Compile Schema to model)
mongoose.model("Mahasiswa", mhsSchema, "mhs");