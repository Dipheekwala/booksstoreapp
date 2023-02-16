const mongoose = require ('mongoose');


const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;


const userSchema= new Schema({
    username:{
         type:String,
         required:true
         },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})

userSchema.pre('save', function(next) {
    if(this.password) {
        const salt = bcrypt.genSaltSync(10)
        this.password = bcrypt.hashSync(this.password, salt)
    }
    next()
})
// export the model
module.exports= mongoose.model('users', userSchema);

