const footerdetails=require("../model/footerdata")



exports.showfooterdata=async function(req,res){
    const record=await footerdetails.findOne()
    //console.log(record)
    res.render('admin/footerdetails.ejs',{record})
}


exports.footerupdatedata=async function(req,res){
    const id=req.params.id
    const record=await footerdetails.findById(id)
    res.render('admin/footerupdate.ejs',{record})
}

exports.footerupdaterec=async function(req,res){
    const filename=req.file.filename
    const{descr,title,address,phone,email,mobile}=req.body
    const id=req.params.id
    if(req.file){
        const file=req.file.filename
        await footerdetails.findOneAndUpdate(id,{descr:descr,title:title,address:address,phone:phone,mobile:mobile,email:email, imgt:filename})
   } else {
        await footerdetails.findOneAndUpdate(id,{descr:descr,title:title,address:address,phone:phone,mobile:mobile,email:email})
    }
    res.redirect('/admin/footerdetails')
   

}


  

    // await footerdetails.findOneAndUpdate(id,{descr:descr,title:title,address:address,phone:phone,mobile:mobile,email:email})
    //res.redirect('/admin/footerdetails')