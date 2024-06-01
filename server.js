const express=require('express')//function
const app=express()//module
app.use(express.urlencoded({extended:false}))
const adminsr=require('./routers/Admin')
const userr=require("./routers/User")
const session=require('express-session')
const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/test1", ()=>{
    console.log("Successfully Connected To DataBase")
})




app.use(session({
    secret:"key",
    saveUninitialized:false,
    resave:false   
}))
app.use('/admin',adminsr)
app.use(userr)
app.use(express.static('public'))
app.set('view engine','ejs')
app.listen(5000,()=>{
    console.log('Server is Running on 5000 port')
})