const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const BookSchema= new Schema({
    title :{
        type : String,
        required: true
    },
    desc: {
        type:String,
        required: false
    },
    year: {
        type: Number,
        required : true,
        max :[2023 , 'year must be less than or equal to 2023']
    },
    isbn : {
        type :String,
        required : true,
        unique : [true, 'ISBN must be unique']// validation with custom message
    },
    price : {
        type: Number,
        required : true,
        min: [1000, ' price must be greater than or equal to 1000 '] // validation with custom message
    },
    createAt: {
        type: Date,
        default:Date.now
    },
    lastUpdateAt: {
        type : Date,
        default: Date.now
    },
});
// export the model
module.exports= mongoose.model('bookstore', BookSchema);