import React, { useState } from 'react';
import axios from 'axios';
import { URL_API_URL } from '../constants/Data';

const AddQuestionsModal = ({ onClose, onAddQuestions }) => {
  const [questionNumber, setQuestionsNumber] = useState('');
  const [question, setQuestions] = useState('');
  const [answers, setAnswers] = useState('');
  const [rightanswer, setRightAnswers] = useState('');
  const [image, setImage] = useState(null);

  const handleAddQuestions = async () => {
    try {
      const response = await axios.post(`${URL_API_URL}/postquestion`, {
        questionNumber,
        question,
        answers: answers.split(','), 
        rightanswer,
        image,
      });

      onAddQuestions(response.data);
      onClose();
    } catch (error) {
      console.error('Error adding Questions:', error.message);
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    transformFileData(file);
  };

  const transformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader?.result);
      };
    } else {
      setImage("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center px-[10px]">
      <div className="bg-white md:w-[500px] w-full p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add Questions</h2>
        <label className="block mb-2">Questions Number</label>
        <input
          type="text"
          value={questionNumber}
          onChange={(e) => setQuestionsNumber(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        <label className="block mb-2">Questions</label>
        <textarea
          value={question}
          onChange={(e) => setQuestions(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        <label className="block mb-2">Answers</label>
        <input
          type="text"
          value={answers}
          onChange={(e) => setAnswers(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        <label className="block mb-2">Right Answer</label>
        <input
          type="text"
          value={rightanswer}
          onChange={(e) => setRightAnswers(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        <input type='file' onChange={(e) => handleImage(e)} />
        <div className="flex justify-end">
          <button
            onClick={handleAddQuestions}
            className="bg-green-500 text-white px-4 py-1 rounded mr-2"
          >
            Add Questions
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionsModal;