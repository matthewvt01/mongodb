const mongoose = require('mongoose');
let dbURI = "mongodb+srv://si:sisteminformasi@cluster0.ns2vztw.mongodb.net/si5a?retryWrites=true&w=majority"

mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err =>{
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose diconnected');
});

//panggil file model
require ("/mahasiswa");
//require("./dosen");          //misal






//mongodb+srv://si:sisteminformasi@cluster0.ns2vztw.mongodb.net/si5a?retryWrites=true&w=majority