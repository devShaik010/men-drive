const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        minlength:[3,"the length is reached !"],
        trim:true,
        lowercase:true,
        required:true
    },

    email:{
        type:String,
        required:true,
        trim:true,
        minlength:[3,"The email is reach minimum !"]
    },

    password:{
        type:String,
        required:true,
        trim:true,
        minlength:[5,'Password must be atlest 5 characters!']
    }
})


const user = mongoose.model('user',userSchema)

module.exports = user;