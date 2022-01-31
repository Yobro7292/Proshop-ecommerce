import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);

export default router;