const jwt  = require("jsonwebtoken");


 const verify_token = (req,res,next) =>{
    
  const token = req.cookies.jwt;
  if(!token){
     return res.redirect("/");
  }else{
       jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
          if(err){
              return res.redirect("/");
          }
          else{
                req.user = decoded;
                next();
          }
       })
  }

   
}   

module.exports = verify_token;