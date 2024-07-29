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

    passwordConfirmation:{ // this would be used only for creating and updating the data
        type:String,
        required:[true,'Pls enter the password'],
        validate:function(el){
            return el===this.password
        }
    }
});

    const User= mongoose.model('User',UserSchema)
    module.exports=User
