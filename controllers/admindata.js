const Adminc=require('../model/adminreg')
const Sliderm=require('../model/slider')
const Services=require('../model/Services')



exports.loginpage=(req,res)=>{
    res.render("admin/admnlogin.ejs")
  }

exports.logindata=async(req,res)=>{
    const{username,pass}=req.body
   const record = await Adminc.findOne({username:username})
   
   if(record!==null){
     if(record.pass==pass){
       req.session.isAuth=true
     res.redirect('/admin/dashboard')
     } 
     else {
       res.redirect('/admin/')
     }
   } else{
     res.redirect('/admin/')
   }
 
 }
 
 exports.dashboard=(req,res)=>{
    res.render("admin/dashboard.ejs")
  
  }

exports.adminlogout=(req,res)=>{
  req.session.destroy()
  res.redirect('/admin/')
}  