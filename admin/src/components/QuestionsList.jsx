import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_API_URL } from '../constants/Data';
import QuestionsItem from './QuestionsItem';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${URL_API_URL}/getquestions`);
        if (response.data && Array.isArray(response.data.questions)) {
          setQuestions(response.data.questions);
        } else {
          console.error('No questions data found in the response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching questions:', error.message);
      }
    };
    fetchQuestions();
  }, []);

  const handleDelete = async (questionId) => {
    try {
      await axios.delete(`${URL_API_URL}/deletequestion/${questionId}`);
      setQuestions((prevQuestions) => prevQuestions.filter((question) => question._id !== questionId));
    } catch (error) {
      console.error('Error deleting question:', error.message);
    }
  };

  return (
    <div className='gap-[10px] flex flex-col '>
      {questions.map((question) => (
        <QuestionsItem key={question._id} question={question} onDelete={() => handleDelete(question._id)} />
      ))}
    </div>
  );
};

export default QuestionsList;
