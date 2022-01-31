import AsyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'

const authUser = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if(email && password)
    {
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
    }
    else{
        res.send("email and/or password is/are Null");
    }
     
})
 // User Profile Route
const getUserProfile = AsyncHandler(async (req, res) => {
   
       // const user = await User.findById(req.user._id)
        res.send("User profile showed.");
   
     
})

export {
    authUser,
    getUserProfile
}