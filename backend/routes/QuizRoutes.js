import express from 'express';
import {
  postQuestion, deleteQuestion, updateQuestion, getQuestions
} from '../Controllers/QuizController.js'; 
import {isAdmin} from '../middleware/authMiddleware.js'; 

const router = express.Router();

// Admin routes
router.post('/postquestion', postQuestion);
router.delete('/deletequestion/:questionNumber', deleteQuestion);
router.put('/updatequestion/:questionNumber', updateQuestion);

// Student route
router.get('/getquestions', getQuestions);

export default router;

