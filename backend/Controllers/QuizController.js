import QuizQuestion from '../models/QuizQuestion.js';
import cloudinary from '../utils/cloudinary.js';


// Admin controller to post a question
const postQuestion = async (req, res) => {
  try {
    const { questionNumber, question, answers, rightanswer, image } = req.body;
    // Upload image to Cloudinary
    if (image) {
      const result = await cloudinary.uploader.upload(image, {
        folder: 'quiz',
      });

      const newQuestion = new QuizQuestion({
        questionNumber,
        question,
        answers,
        rightanswer,
        image: result.secure_url,
      });
console.log(newQuestion,result.secure_url)
      await newQuestion.save();

      res.status(201).json({ message: 'Question posted successfully.' });
    } else {
      // Handle the case where no image is provided
      const newQuestion = new QuizQuestion({
        questionNumber,
        question,
        answers,
        rightanswer,
      });

      await newQuestion.save();

      res.status(201).json({ message: 'Question posted successfully.' });
    }
  } catch (error) {
    console.error('Error posting question:', error);
    res.status(500).json({ error: 'Error' });
  }
};

// Admin controller to delete a question
const deleteQuestion = async (req, res) => {
  try {
    const { questionNumber, } = req.params;

    const deletedQuestion = await QuizQuestion.findOneAndDelete({ questionNumber });

    if (deletedQuestion) {
      res.json({ message: 'Question deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Question not found.' });
    }
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Admin controller to update a question
const updateQuestion = async (req, res) => {
  try {
    const { questionNumber, paperNumber } = req.params;
    const { question, answers,rightanswer } = req.body;

    const updatedQuestion = await QuizQuestion.findOneAndUpdate(
      { questionNumber,   },
      { question, answers,rightanswer },
      { new: true }
    );

    if (updatedQuestion) {
      res.json({ message: 'Question updated successfully.', updatedQuestion });
    } else {
      res.status(404).json({ error: 'Question not found.' });
    }
  } catch (error) {
    console.error('Error updating question:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Student controller to get all questions
const getQuestions = async (req, res) => {
  try {
    const questions = await QuizQuestion.find();

    res.json({ questions });
  } catch (error) {
    console.error('Error getting questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



export { postQuestion, deleteQuestion, updateQuestion, getQuestions };
