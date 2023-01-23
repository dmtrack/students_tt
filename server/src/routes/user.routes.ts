import { Router } from 'express';
import {
    createUser,
    getUserById,
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
// router.get('/getuser/:id', getUserById);
// router.put('/updateuser', updateUser);
router.delete('/deleteuser', deleteUser);

router.post('/signup', signUp);
router.post('/signin', signIn);
router.put('/togglestatus', toggleStatus);

export default router;
