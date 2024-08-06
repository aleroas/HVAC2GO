// src/routes/userRoutes.js
import express from 'express';
import { registerUser, loginUser, getUsers, getUserById, updateUserById, deleteUserById } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', auth, getUsers);  // Protected route
router.get('/users/:id', auth, getUserById);  // Protected route
router.put('/users/:id', auth, updateUserById);  // Protected route
router.delete('/users/:id', auth, deleteUserById);  // Protected route

export default router;
