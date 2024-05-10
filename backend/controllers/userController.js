import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';


// @desc fot the user registration
// route POST => /api/users
// access public
const userRegistration = asyncHandler( async (req, res) => {
    const {firstname, lastname, email, password} = req.body;

    const userExits = await User.findOne({email});
    if (userExits) {
        res.status(400)
        throw new Error('User already exists');
    }

    const user = await User.create({firstname, lastname, email, password});
    if (user) {
        res.status(201).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data');
    }
    
})


// @desc fot the user authentication
// route POST => /api/users/auth
// access public
const userAuth = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'User Authentication'})
})



// @desc fot the user Logout
// route POST => /api/users/logout
// access public
const logoutUser = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'User Logout'})
})

// @desc fot the user profile
// route GET => /api/users/profile
// access private routes
const getUserProfile = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Get the user profile'})
})

// @desc fot the user Logout
// route PUT => /api/users/profile
// access private
const updateUserProfile = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'User Update Profile'})
})

export {userAuth , userRegistration, getUserProfile, updateUserProfile, logoutUser}