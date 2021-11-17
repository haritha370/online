const jwt=require('jsonwebtoken')
const authenticate=(req,res,next)=>{
    try{
        const token=req.headers.authentication.split(' ')[1]
        const decode=jwt.verify(token,'verySecreteValue')
        req.user=decode
        next()
    }
    catch(err){
        res.json({
            message:"authentication failed"
        })
    }
}
module.exports=authenticate