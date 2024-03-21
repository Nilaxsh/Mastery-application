import mongoose from 'mongoose';

const quizQuestionSchema = new mongoose.Schema({

  questionNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
    validate: {
      validator: (answers) => answers.length === 4,
      message: 'There must be exactly 4 answers.',
    },
  },
  rightanswer:{
    type:String
  },
 image:{
  type:String
 }
});

const QuizQuestion = mongoose.model('QuizQuestion', quizQuestionSchema);

export default QuizQuestion;
