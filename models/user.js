const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, "must enter the name"],
        maxlength:[10, "name must be in range (<10)"],
        trim:true
    },
    lastName:{
        type:String,
        required:[true, "must enter the name"],
        maxlength:[10, "name must be in range (<10)"],
        trim:true
    },
    password:{
        type:String,
        required:[true, "must enter the name"],
        minlength:[8, "password must be >8"],
    },
    address:{
        type:String,
    },
    age:{
        type:Number,
        required:[true, "must enter the age"],
        min:18,
        max:100,
        unique:false,
    }
})

module.exports = mongoose.model('Task', UserSchema)