import express from 'express';
import { userAuth , userRegistration, getUserProfile, updateUserProfile, logoutUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/auth', userAuth);
router.post('/', userRegistration);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router