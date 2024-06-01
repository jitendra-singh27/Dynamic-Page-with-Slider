const Testm=require('../model/testinomial')
const Footerdetails=require("../model/footerdata")
const Socialmedia=require('../model/footersm')


exports.showtestinomail=async  function(req,res){
    const Footerdata=await Footerdetails.findOne()
    const Socialrecord= await Socialmedia.findOne()
    res.render('testinomial.ejs',{Footerdata,Socialrecord})
}

exports.testirecord=async function(req,res){
    const file=req.file.filename
    const {quote,name,company}=req.body
    const record=new Testm({name:name,quotes:quote,img:file ,company:company})
    await record.save()
    res.redirect('/')
    


}


exports.showtestimange=async function (req,res){
    const record=await Testm.find()
   res.render('admin/testmange.ejs',{record})
}

exports.deletetest= async(req,res)=>{
    const id=req.params.id
    await Testm.findByIdAndDelete(id)
    res.redirect('/admin/testim')

}

exports.statustest=async (req,res)=>{
    const id=req.params.id
    const record=await Testm.findById(id)
    let status=null
    if(record.status=="private"){
        status="public"
    }else{
        status='private'
    }
    await Testm.findByIdAndUpdate(id,{status:status})
    
    res.redirect('/admin/testim')
}