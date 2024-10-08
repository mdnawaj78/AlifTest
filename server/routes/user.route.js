
import express from 'express';
import { test, updateUser, deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

// Use router.get instead of app.get
router.get('/', test); 
router.post("/update/:id", verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);

export default router; // Correct export for ES Modules