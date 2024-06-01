const mongoose=require('mongoose')
  
const sliderdata=mongoose.Schema({
    img:String,
    title:String,
    ldes:String ,
    status:{type:String,default:'unshow'}

})




module.exports=mongoose.model('slider',sliderdata)