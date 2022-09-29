const PostS = require("../Models/PostSchema")

//Add Post
const AddPost = async(req,res)=>{
    try {
    const newPoest = await new PostS({Posting:req.body.Posting,owner:req.UserId})
    const savedPost= await newPoest.save()  
    return res.json({savedPost,msg:"Post added successfully"})

    } catch (error) {
        return res.status(500).json({message:error})
    }
}


//GET POST

const GetPost = async(req,res)=>{
    try {
        const posts = await PostS.find({}).populate({path:'owner',select:"Posting FirstName LastName" }).populate({path:'Comment.owner' })
       return res.json(posts)
    } catch (error) {
        return res.status(500).json({message:error})
    }
}


//Delete Post

const DeletePost = async(req,res)=>{
    try {
        const DeletedPost = await PostS.findByIdAndDelete(req.params.id)
       return res.json({msg:'The Post is deleted',DeletedPost})
    } catch (error) {
        return res.status(500).json({message:error})
    }
}

//comments 

//Add Comment 
const AddComment = async(req,res)=> {     
    try {         
    const {text} = req.body        
    const PostWithNewComment = await PostS.findByIdAndUpdate(req.params.id,{ $push: {Comment:[{"owner":req.UserId,"text":text}]}},{new:true})
    .populate({path:'owner',select:"Posting FirstName LastName" })        
    .populate('Comment.owner')        
    res.json(PostWithNewComment)     
} 
catch (error) {         
    res.status(501).json({message:error})      
}}

const DeleteComment = async(req,res)=> {     
    try {                
    const DeleteC = await PostS.findByIdAndUpdate(req.query.idPost, {$pull: {Comment: {_id:{$eq: req.query.idComment}}}},{new:true})    
    res.json({msg:'The Comment is deleted',DeleteC})   
} 
catch (error) {         
    res.status(501).json({message:error})      
}}


module.exports = {AddPost,GetPost,DeletePost,AddComment,DeleteComment}
