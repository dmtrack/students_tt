import { Router } from 'express';
import {
    createUser,
    getUserById,
    getAllUsers,
    deleteUser,
    updateUser,
} from '../controllers/userController';
const router = Router();

router.post('/createuser', createUser);
router.get('/getusers', getAllUsers);
router.get('/getuser/:id', getUserById);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);

export default router;
