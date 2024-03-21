import express from 'express';
const router = express.Router();
import { authUser,registerUser,getUserProfile,logoutUser,updateUserProfile,loginAdmin, getOneUser
} from '../Controllers/userController.js';
import { protect,isAdmin, authLoginUser } from '../middleware/authMiddleware.js';
router.post('/reg', registerUser);
router.post('/user-login', authUser);
router.get('/get-one-user', authLoginUser,getOneUser);

router.post("/admin-login",isAdmin,loginAdmin);
router.post('/logout', logoutUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);
router.route('/admin').get(protect,isAdmin)
export default router;