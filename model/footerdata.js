const mongoose=require('mongoose')
  
const footer=mongoose.Schema({
   imgt:String,
   descr:String,
   title:String,
   address:String,
   phone:String,
   mobile:String,
   email:String

   
})




module.exports=mongoose.model('footerdata',footer)