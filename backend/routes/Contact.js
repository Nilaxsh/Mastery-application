import express from 'express';
import { createMessage } from './path-to-your-controller'; // Update the path accordingly

const router = express.Router();

// Define your route for creating a new message
router.post('/messages', createMessage);

export default router;
