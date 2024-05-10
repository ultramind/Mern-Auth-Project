import jwt from 'jsonwebtoken';

const generateToken = async (userId, res) => {
    const token = await jwt.sign({userId}, process.env.SECRET_KEY, {expiresIn: '30d'});
    res.cookie('jwt',token, { maxAge: 30 * 24 * 60 * 60 * 1000 , path: '', httpOnly: true, secure: process.env.NODE_ENV !== 'development', sameSite: 'strict'});
}

export default generateToken;