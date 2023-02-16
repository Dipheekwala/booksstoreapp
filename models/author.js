const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const authorSchema= new Schema({
    firstname :{
        type : String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    dob: {
        type: String,
        required : true,
        max:[2020, 'year must be less than or equal to 2020']
    },
    nationality: {
        type:String,
        required:true
    },
    gender :{
        type: String,
        required:true
    },
    state: {
        type :String,
        require:true
    },
    living: {
        type:Boolean,
        require :true
    }


});
// export the model
module.exports= mongoose.model('authors', authorSchema);