const router=require('express').Router()
const sliderc=require('../controllers/slidercontroller')
const admindc=require('../controllers/admindata')
const serivesc=require('../controllers/servicescontroller')
const Admindata=require('../model/adminreg')
const slider = require('../model/slider')
const ServiceM=require('../model/Services')
const Footerdetails=require("../model/footerdata")
const footers=require('../controllers/footercontrol')
const Socialmedia=require('../model/footersm')
const socialmediac=require('../controllers/socialmedialcontrol')
const QueryM=require('../model/query')
const queryC=require('../controllers/querycontroller')
const Testm=require('../model/testinomial')
const testc=require('../controllers/testicontroller')
const multer=require('multer')



let storage=multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./public/upload')
  },
  filename: function(req,file,cb){
    cb(null,Date.now()+file.originalname)
  }

})

let upload=multer({
storage:storage,
limits:{fieldSize:1024*1024*20}
})




router.get('/',async(req,res)=>{
  const sliderrecord=await slider.find({status:'show'})
  const Servicesrecord=await ServiceM.find({status:'show'})
  const Testirecord=await Testm.find({status:'public'})
  const Footerdata=await Footerdetails.findOne()
  const Socialrecord= await Socialmedia.findOne()

  res.render("index.ejs",{sliderrecord,Servicesrecord,Footerdata,Socialrecord,Testirecord})

})

router.get('/servicedetails/:id',serivesc.userservicedetail)


//testinomail
router.get('/testi',testc.showtestinomail)
router.post('/testirecord',upload.single('img'),  testc.testirecord)


//query
router.post('/queryrec',queryC.Queryrec)

module.exports=router
