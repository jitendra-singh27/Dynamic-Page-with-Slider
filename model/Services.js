const mongoose=require('mongoose')

const ServiceM=mongoose.Schema({
    img:String,
    title:String,
    des:String,
    ldes:String,
    status:{type:String,default:'unshow'}
})



module.exports=mongoose.model("Services",ServiceM)