const slider = require('../model/slider')
const footerdetails=require("../model/footerdata")



exports.slidermang=async (req,res)=>{
   const record= await slider.find()
   const Slidersss= await slider.count()
    const showslider=await slider.count({status:'show'})
    const unshowslider=await slider.count({status:'unshow'})
    const Footerrecord=await footerdetails.findOne()
    res.render('admin/slider.ejs',{record,Slidersss,showslider,unshowslider,Footerrecord})
}

exports.sliderad= function(req,res){
    res.render('admin/slideradd.ejs')
}

exports.sliderrec= async (req,res)=> {
   const filename=req.file.filename 
   console.log(req.body)
   const {title,ldes}=req.body
   const record= new slider({title:title,ldes:ldes,img:filename})
   await record.save()
   //console.log(record)
   res.redirect('/admin/slider')
    
}

exports.sliderdel= async(req,res)=>{
    const id=req.params.id
    await slider.findByIdAndDelete(id)
    res.redirect('/admin/slider')
}

exports.AdminaddSliders=async(req,res)=>{
    const id=req.params.id
    const record = await slider.findById(id)
    //console.log(record)
    res.render('admin/sliderupdate.ejs',{record})
}


exports.Adminsliderupdaterecord=async(req,res)=>{
    const {title,ldes}=req.body
    const id=req.params.id
    if(req.file){
        const file=req.file.filename
        await slider.findByIdAndUpdate(id,{title:title,ldes:ldes,img:filename})
    } else {
        await slider.findByIdAndUpdate(id,{title:title,ldes:ldes})
    }
    res.redirect("/admin/slider")
}

exports.AdminSatusSlider=async function(req,res){
    const id=req.params.id
    const record=await slider.findById(id)
    let status=null
    if(record.status=="unshow"){
        status='show'
    } else{
        status="unshow"
    }
    await slider.findByIdAndUpdate(id,{status:status})
    res.redirect('/admin/slider')
}
   


