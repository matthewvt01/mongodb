const mongoose = require('mongoose');
let mahasiswa = mongoose.model("Mahasiswa")
const mhsList = (request, response) =>{
    mahasiswa.find({},
        function(err, result) {
            if(err) {
                res.status(500)
                    .json({"status" : "failed"});
            } else {
                res.status(200)
                .json(
                    {
                        "status" : "success",
                        "data" : result
                    });
            }    
        });
};
const mhsCreate = (request, response) =>{

};
const mhsReadOne = (request, response) =>{

};
const mhsUpdateOne = (request, response) =>{

};
const mhsDeleteOne = (request, response) =>{

};
module.exports = {
    mhsList,
    mhsCreate,
    mhsReadOne,
    mhsUpdateOne,
    mhsDeleteOne,
}