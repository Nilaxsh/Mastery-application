import express from 'express';
import {
    getAllLearners,getLearnerById ,createLearner ,updateLearnerById,deleteLearnerById
} from "../Controllers/learnerController.js"

const roteLearn = express.Router();

// Routes
roteLearn.get('/learnersAll', getAllLearners);
roteLearn.get('/learners/:id', getLearnerById);
roteLearn.post('/learners', createLearner);
roteLearn.put('/learners/:id', updateLearnerById);
roteLearn.delete('/learners/:id', deleteLearnerById);

export default roteLearn;
