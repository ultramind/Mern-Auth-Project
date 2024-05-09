import asyncHandler from 'express-async-handler'
// @desc fot the user authentication
// route POST => /api/users/auth
// access public
const userAuth = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'User Authentication'})
})

// @desc fot the user registration
// route POST => /api/users
// access public
const userRegistration = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'User Registration'})
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