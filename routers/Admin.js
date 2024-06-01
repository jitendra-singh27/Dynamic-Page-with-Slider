const router=require("express").Router()
const session = require("express-session")
const Admindata=require('../model/adminreg')
const Sliderm=require('../model/slider')
const ServiceM=require('../model/Services')
const admindc=require('../controllers/admindata')
const sliderc=require('../controllers/slidercontroller')
const serivesc=require('../controllers/servicescontroller')
const Footerdetails=require("../model/footerdata")
const footers=require('../controllers/footercontrol')
const Socialmedia=require('../model/footersm')
const socialmediac=require('../controllers/socialmedialcontrol')
const QueryM=require('../model/query')
const queryC=require('../controllers/querycontroller')
const Testm=require('../model/testinomial')
const testc=require('../controllers/testicontroller')

const multer=require('multer')//uploader

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


function handlelogin (req,res,next){
  if(req.session.isAuth){
    next()
  } else {
    res.redirect("/admin/")
  }
}


router.get('/',admindc.loginpage)
router.get('/dashboard', handlelogin,admindc.dashboard) 
router.post('/login',admindc.logindata)
router.get('/logout',admindc.adminlogout)



router.get('/slider',sliderc.slidermang)
router.get('/slideradd',sliderc.sliderad)
router.post('/sliderrec',upload.single('img'),sliderc.sliderrec)
router.get('/sliderdel/:id',sliderc.sliderdel)
router.get('/sliderupd/:id',sliderc.AdminaddSliders)
router.post('/sliderupdrecord/:id',upload.single('img'),sliderc.Adminsliderupdaterecord)
router.get('/sliderstatus/:id',sliderc.AdminSatusSlider)



router.get('/services',serivesc.AdminServicesshow)
router.get('/servicesadd',serivesc.AdminServiesadd)
router.post('/serviesrec',upload.single('img'),serivesc.AdminServicesrec)
router.get('/serviesdel/:id',serivesc.servicesdel)
router.get('/servicesupd/:id',serivesc.AdminupdateServices)
router.post('/servicesupdrecord/:id',upload.single('img'),serivesc.Adminservicesrecord)
router.get('/servicestatus/:id',serivesc.adminservicesstatus)


//footer

router.get('/footerdetails',footers.showfooterdata)
router.get('/footerupdate/:id',footers.footerupdatedata)
router.post('/footerupdaterec/:id',upload.single('imgt'),footers.footerupdaterec)

//socialmedia

router.get('/socialmediamange',socialmediac.Socialmediapageshow)
router.get('/socialupd/:id',socialmediac.SocialMediaUpdate)
router.post("/updatelinks/:id",socialmediac.UpdatedLink)


//QueryData
router.get('/Query',queryC.QueryManage)
router.get('/delerec/:id',queryC.QueryDelete)
router.get('/replyquery/:id',queryC.QueryReply)
router.post('/queryreplyrecords',upload.single('attachment'), queryC.QueryReplyRecords)

router.get("/testim",testc.showtestimange)
router.get('/delete/:id',testc.deletetest)
router.get('/status/:id',testc.statustest)





module.exports=router