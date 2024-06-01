const QueryM=require('../model/query')
const nodemailer=require('nodemailer')



 // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount =  nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'testnode880@gmail.com' , // generated ethereal user
      pass: 'ghlfrjevjdmjsvgq', // generated ethereal password
    },
  });


 




exports.Queryrec=async function(req,res){
    const {Email,Query}=req.body
    const record=new QueryM({email:Email,query:Query})
    await record.save()
    //console.log(record)
    res.redirect('/')

}


exports.QueryManage= async(req,res)=>{
    const record= await QueryM.find()
    res.render('admin/querymang.ejs',{record})
}

exports.QueryDelete=async (req,res)=>{
    const id=req.params.id
    await QueryM.findByIdAndDelete(id)
    res.redirect('/admin/Query')
}



exports.QueryReply= async function (req,res){
  const id=req.params.id
  const record=await QueryM.findById(id)
    res.render('admin/queryreply.ejs',{record})

}

exports.QueryReplyRecords=async(req,res)=>{
  const filepath=req.file.path
    const{eto,emailfrom,Subject,body}=req.body

    
   
     // send mail with defined transport object
  let info = await transporter.sendMail({
    from: emailfrom, // sender address
    to: eto, // list of receivers
    subject: Subject, // Subject line
    text: body, // plain text body
    //shtml: "<b>Hello world?</b>", // html body
    attachments:[{
      path:filepath
    }]
  });
  res.redirect('/admin/Query')
}






 