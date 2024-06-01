const Socialmedia=require('../model/footersm')



exports.Socialmediapageshow=async function (req,res){
      const record=await Socialmedia.findOne()
      //console.log(record)
      res.render('admin/socialmediamang.ejs',{record})
}


exports.SocialMediaUpdate=async  function(req,res){
      const id=req.params.id
      const record=await Socialmedia.findByIdAndUpdate(id)
      res.render('admin/socialupd.ejs',{record})
}


exports.UpdatedLink= async function(req,res){
      const id=req.params.id
      const {insta,link,snap,twitter}=req.body
      await Socialmedia.findByIdAndUpdate(id,{instagram:insta,linkedin:link,Snapchat:snap,twitter:twitter})
      res.redirect('/admin/socialmediamange')
}

