const jwt = require("jsonwebtoken");
require('dotenv').config()


exports.Authentification = async(req,res,next)=>{
    try {
        const token = req.header('token');
        const validToken = await jwt.verify(token,process.env.SECRET)
        if(!validToken){
           return res.status(400).json({message:'You are not authorized'})
        }
        req.UserId = validToken.id
        next()
    } catch (error) {
        res.status(500).json({message: error})
    }
}