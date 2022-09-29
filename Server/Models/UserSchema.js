const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    FirstName : {
        type : String,
        required : true 
    },
    LastName : {
        type : String,
        required : true 
    },
    PhoneNumber: Number,
    email:{
        type:String,
        required : true,
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'please put a valid email'] 
    },
    Password:{
        type:String,
        required : true
    },
    Role:{
        type : String,
        enum:['user','Admin '],
        default : 'user'
    }
})

module.exports = mongoose.model('User',UserSchema)