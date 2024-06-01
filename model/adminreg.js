const mongoose=require("mongoose")

const admind=mongoose.Schema({
    username:String,
    pass:String
})


module.exports = mongoose.model('adminreg',admind)