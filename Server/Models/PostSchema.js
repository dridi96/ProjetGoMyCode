const mongoose = require ('mongoose')


const PostSchema = new mongoose.Schema({
    Posting:String,
    owner:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    Comment:[{
        owner:{
            type:mongoose.Types.ObjectId,
            ref:'User'
        },
        text:String,
        date:{
            type:Date,
            default:Date.now()
        }
    }]
})

module.exports = mongoose.model('Post',PostSchema)