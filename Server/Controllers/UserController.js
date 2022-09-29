const User = require ('../Models/UserSchema')
const {validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Register = async(req,res)=>{
    try {
        // Finds the validation errors
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.mapped()})
        }

        const {FirstName,LastName,PhoneNumber,email,Password} = req.body
        //check
        const saved = await User.findOne({email})
        if (saved){
            return res.status(400).json({message:'Email already in use'})
        }

        //cryptage
        const salt = await bcrypt.genSalt(10);
        const passwordCrypte = await bcrypt.hash(Password, salt);

        // User Creation 
        const newUser = await User.create({FirstName,LastName,PhoneNumber,email,Password:passwordCrypte})

        //token
        const token = await jwt.sign({id:newUser._id },process.env.SECRET, {expiresIn:'30d'})
        res.status(200).json({newUser,token})

    } catch (error) {
        res.json({message:error})
    }
}

    //login 
    const Login = async(req,res)=>{
        try {
            const errors = validationResult(req)
                if (!errors.isEmpty()){
                    return res.status(400).json({errors:errors.mapped()})
                }

                const {email,Password} = req.body
                // vérification
                const found = await User.findOne({email})
                if (!found){
                    return res.status(400).json({message: 'Cannot find user, you have to register'})
                }

                // compare password
                const matchedPassword = await bcrypt.compare(Password , found.Password)
                if (!matchedPassword){
                    return res.status(400).jason({message:'Wrong Password'})
                 } 
                //else {
                //     return res.send('Success')
                // }

                //regenerate token
                const tokenvalidate = await jwt.sign({id:found._id},process.env.SECRET)
                return res.status(200).json({found,tokenvalidate})
               

        } catch (error) {
            res.status(500).json({message:error})
    }

}

//get usrs 
const GetDataUsers = async(req,res)=>{
    try {
     const registerUser = await User.find({}).select("-Password -PhoneNumber -__v")
     res.status(200).json(registerUser)
    } catch (error) {
     res.status(500).json({message: error})
 
    }
 }

 //update user
 const UpdateDataUsers = async(req,res)=>{
    try {
     const registerUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).select('-password')
     res.status(200).json(registerUser)
    } catch (error) {
     res.status(500).json({message: error})
 
    }
 }

 //delete user
 const DeleteDataUSer = async(req,res)=>{
    try {
        const deleted = await User.findByIdAndDelete(req.params.id)
        res.json({deleted,msg:'the user has been deleted'})
    } catch (error) {
        res.status(500).json({message: error})

    }
}

module.exports={Register,Login,GetDataUsers,UpdateDataUsers,DeleteDataUSer}