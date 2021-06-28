const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, "must enter the name"],
        maxlength:[20, "name must be in range (<20)"],
        trim:true
    },
    lastName:{
        type:String,
        required:[true, "must enter the name"],
        maxlength:[20, "name must be in range (<20)"],
        trim:true
    },
    password:{
        type:String,
        required:[true, "must enter the name"],
        minlength:[8, "name must be in range (<20)"],
    },
    address:{
        type:String,
        required:[true, "must enter the name"],
    },
    age:{
        type:Number,
        required:[true, "needed"],
        min:18,
        max:100,
        unique:false,
    }
})

module.exports = mongoose.model('Task', UserSchema)