const mongoose=require('mongoose')


const queryform=mongoose.Schema({
    email:String,
    query:String,
    status:{type:String,default:"Reply"}
})


module.exports=mongoose.model('query',queryform)