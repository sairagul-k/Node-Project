const mongoose =require('mongoose');
const validator = require('validator');

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter your name!']
    },

    email:{
       type:String,
       required:[true, 'Please enter the email!'],
       unique:true,
       lowercase:true,
       validator:[validator.isEmail,'Enter the crt email']
    },
    photo:{
       type:String
    },

    password:{
       type:String,
       required:[true,'Pls enter the password'],
       minlength:8
    },

    passwordConfirmation:{
        type:String,
        required:[true,'Pls enter the password'],
    }
});

    const User= mongoose.model('User',UserSchema)
    module.export=User
