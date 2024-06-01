const mongoose=require('mongoose')


const testiSch=mongoose.Schema({
    name:String,
    img:String,
    quotes:String,
    company:String,
    status:{type:String,default:'private'},
})

module.exports=mongoose.model('testi',testiSch)