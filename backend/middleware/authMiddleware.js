import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";

const protect = expressAsyncHandler(async(req, res, next) => {
    let token;
     if(req.headers.auth && req.headers.auth.startsWith('Bearer'))
     {
         try {

             token = req.headers.auth.split(' ')[1];
             const decode = jwt.verify(token, process.env.JWT_SECRET);
             console.log(decode);
             req.user = await User.findById(decode.id).select('-password');
             next()
             
         } catch (error) {
             console.error(error);
             res.status(401);
             throw new Error('Token Failed');
         }
     }    
     if(!token){
         res.status(401);
         throw new Error('No token');
     }
     
});

export { protect }