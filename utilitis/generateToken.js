import jwt from "jsonwebtoken"

// create json web token which expire in 3 days
const maxAge= 3*24*60*60;

export const createToken=(user)=>{
    return jwt.sign({id:user._id,
                     name:user.name,
                     email:user.email,
                     isAdmin:user.isAdmin},
      process.env.JWT_KEY,
      {
        expiresIn: maxAge,
      }
      )
}
