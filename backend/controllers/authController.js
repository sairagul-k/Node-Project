const User= require("./../models/usermodel");

exports.signup= async(req,res,next)=>{
    const newUser= await User.create(req.body);
try{
    res.status(201).json({
        status:'success',
        data:{
            user:newUser
        }
     })

}  
catch(err){
    res.status(400).json({
        status: 'fail',
        message: "no data was found fuckerrrr"
      });
}
 

}