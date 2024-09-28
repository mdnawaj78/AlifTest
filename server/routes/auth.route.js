import express from 'express';
import { google, signin, signup, signout } from '../controllers/auth.controller.js'; // Ensure the correct path and consistent casing

const router = express.Router();

// Route for user /sign-up
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);
router.get('/signout', signout);

export default router;