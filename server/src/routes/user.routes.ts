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
router.get('/getuser/:id', getUserById);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);

router.post('/signup', signUp);
router.post('/signin', signIn);
router.put('/togglestatus/', toggleStatus);

export default router;
