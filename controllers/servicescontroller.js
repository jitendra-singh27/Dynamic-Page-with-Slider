const Services=require('../model/Services')
const Footerdetails=require("../model/footerdata")
const Socialmedia=require('../model/footersm')
 

exports.AdminServicesshow=async(req,res)=>{
    const record= await Services.find()
    const Service= await Services.count()
    const showservices=await Services.count({status:'show'})
    const unshowservices=await Services.count({status:'unshow'})
    res.render('admin/services.ejs',{record,Service,showservices,unshowservices,})
}

exports.AdminServiesadd=(req,res)=>{
    res.render ('admin/servicesadd.ejs')
}



exports.AdminServicesrec=async(req,res)=>{
    const filename=req.file.filename
     console.log(req.body)
    const{ title,des,ldes}=req.body
     const record = new Services({title:title,des:des,ldes:ldes,img:filename})
     await record.save()
     //console.log(record)
     res.redirect('/admin/services')
      
}


exports.servicesdel= async(req,res)=>{
    const id=req.params.id
    await Services.findByIdAndDelete(id)
    res.redirect('/admin/services')
}

exports.AdminupdateServices=async(req,res)=>{
    const id=req.params.id
    const record = await Services.findById(id)
    //console.log(record)
    res.render('admin/servicesupd.ejs',{record})
}

exports.Adminservicesrecord=async(req,res)=>{
    const{ title,des,ldes}=req.body
    const id= req.params.id
    if(req.file){
    const filename=req.file.filename
    await Services.findByIdAndUpdate(id,{title:title,des:des,ldes:ldes,img:filename})
    } else {
        await Services.findByIdAndUpdate(id,{title:title,des:des,ldes:ldes})
    }
    res.redirect('/admin/services')
}

exports.adminservicesstatus =async(req,res)=>{
    const id=req.params.id
    const record=await Services.findById(id)
    let status=null
    if(record.status=='unshow'){
        status="show"
    } else{
        status="unshow"
    }
    await Services.findByIdAndUpdate(id,{status:status})
    res.redirect('/admin/services')

}


exports.userservicedetail=async function(req,res){
    const id=req.params.id
    const Footerdata=await Footerdetails.findOne()
    const Socialrecord= await Socialmedia.findOne()
    const record=await Services.findById(id)
    res.render("service.ejs",{record,Footerdata,Socialrecord})
    

}