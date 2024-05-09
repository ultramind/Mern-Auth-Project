import asyncHandler from 'express-async-handler'
// @desc fot the user authentication
// route POST => /api/users
// access public
const userAuth = asyncHandler( async (req, res) => {
    res.status(200);
    throw new Error("Something went wrong");
    res.status(200).json({message: 'User Authentication'})
})

export {userAuth}