import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUserProfile, removeUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser);
router.route('/remove').post(removeUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);

export default router;