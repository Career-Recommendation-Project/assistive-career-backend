import  jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  //request the jwt from the user 
  const authorization = req.headers.authorization;

  if (authorization) {
    const token =authorization.slice(7,authorization.length);//Bearer XXXXXX
    if(token){
      jwt.verify(token, process.env.JWT_KEY, (err, decodedToken) => {
        if (err) {
          const error = err.message;
          res.status(400).send({message: error });
        } else {
            req.user=decodedToken
           next();
        }
      });
    }
     
  } else {
    res.status(401).send({message:"No Token"});
  }
};


export const isAdmin=(req,res,next)=>{
  if(req.user && req.user.isAdmin){
    next()
  }else{
    res.status(401).send({message :"Invalid Admin Token"})
  }
}



