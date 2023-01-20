import { Router } from 'express';
const userController = require('../controllers/user.controller');
const router = Router();

router.post('/createuser', userController.createUser);
router.get('/getusers', userController.getUsers);
// router.get('/blockuser/:id', userController.blockUser);
// router.delete('/deleteusers', userController.deleteUsers);

export default router;
