const mongoose=require('mongoose')


const socialmedia=mongoose.Schema({
    instagram:String,
    linkedin:String,
    Snapchat:String,
    twitter:String
})

module.exports=mongoose.model("social",socialmedia)