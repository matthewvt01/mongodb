const mongoose = require('mongoose');

const mhsSchema = new mongoose.Schema({
    npm: String,
    nama: String,
    tgl_lahir: Date,
    hobi: [String]
});

mongoose.models("Mahasiswa", mhsSchema, "mhs");