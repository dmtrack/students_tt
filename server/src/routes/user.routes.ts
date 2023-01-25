import { Router } from 'express';
import {
    createUser,
    getUserStatus,
    getAllUsers,
    deleteUser,
    updateUser,
    signUp,
    signIn,
    toggleStatus,
} from '../controllers/userController';
const router = Router();

router.post('/createuser', createUser);
router.get('/getusers', getAllUsers);
router.get('/getuserstatus', getUserStatus);
// router.put('/updateuser', updateUser);
router.delete('/deleteuser', deleteUser);

router.post('/signup', signUp);
router.post('/signin', signIn);
router.put('/togglestatus', toggleStatus);

export default router;
