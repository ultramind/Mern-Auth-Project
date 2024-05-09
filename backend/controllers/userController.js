
// @desc fot the user authentication
// route POST => /api/users
// access public
const userAuth = (req, res) => {
    res.status(200).json({message: 'User Authentication'})
}

export {userAuth}