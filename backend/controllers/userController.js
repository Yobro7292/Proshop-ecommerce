import AsyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'

//Route for auth user and generate Token for users POST route /api/users/login
const authUser = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
        const user = await User.findOne({ email })
        if(user && (await user.matchPassword(password))){
            res.json({
                _id : user._id,
                name: user.name,
                email: user.email,
                isAdmin : user.isAdmin,
                token: generateToken(user._id)
            })

        }        
        else{
            res.status(401);
            throw new Error('Invalid User');
        }
    
    
     
})

//Route for register new user POST route /api/users/

const registerUser = AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if(email && password)
    {
        const userExists = await User.findOne({ email })
        if(userExists){
           res.status(400).json({
               message: "user already exists.",
           })
        }  
        else{
            const user = await User.create({
                name,
                email,
                password
            })

            if(user){
                res.status(201).json({
                    _id : user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin : user.isAdmin,
                    token: generateToken(user._id)
                })
            }else{
                res.status(400).json({
                    message: "Invalid user data",
                })
            }
        }      

    }
    else{
        res.send("email and/or password is/are Null");
    }
     
})

 // User Profile Route GET route /api/users/profile
const getUserProfile = AsyncHandler(async (req, res) => {
   
        const user = await User.findById(req.user._id)
        if(user){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            })
        }
        else{
            res.status(404).json({
                message: "User not found",
            })
            
        }
   })

export {
    authUser,
    getUserProfile,
    registerUser
}