import React, { useState } from 'react';
import axios from 'axios';
import { URL_API_URL } from '../constants/Data';

const EditQuestionsModel = ({ isOpen, onClose, question, onSave }) => {
  const [updatedQuestionsNumber, setUpdatedQuestionsNumber] = useState(question.questionNumber);
  const [updatedQuestions, setUpdatedQuestions] = useState(question.question);
  const [updatedAnswers, setUpdatedAnswers] = useState(question.answers);
  const [updatedRightAnswer, setUpdatedRightAnswer] = useState(question.rightanswer);
  const [error, setError] = useState(null);

  const handleSave = async () => {
    try {
      const response = await axios.put(`${URL_API_URL}/questions/${question._id}`, {
        questionNumber: updatedQuestionsNumber,
        question: updatedQuestions,
        answers: updatedAnswers,
        rightanswer: updatedRightAnswer,
      });

      onSave(response.data);
      onClose();
    } catch (error) {
      setError('Error updating questions. Please try again.'); // Set error state
      console.error('Error updating questions:', error.message);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center px-[10px]">
          <div className="bg-white md:w-[500px] w-full p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Questions</h2>
            <label className="block mb-2">Questions Number</label>
            <input
              type="text"
              value={updatedQuestionsNumber}
              onChange={(e) => setUpdatedQuestionsNumber(e.target.value)}
              className="w-full border p-2 mb-4 rounded-md"
            />
            <label className="block mb-2">Questions</label>
            <textarea
              value={updatedQuestions}
              onChange={(e) => setUpdatedQuestions(e.target.value)}
              className="w-full border p-2 mb-4 rounded-md"
            />
            <label className="block mb-2">Answers</label>
            <input
              type="text"
              value={updatedAnswers}
              onChange={(e) => setUpdatedAnswers(e.target.value)}
              className="w-full border p-2 mb-4 rounded-md"
            />
            <label className="block mb-2">Right Answer</label>
            <input
              type="text"
              value={updatedRightAnswer}
              onChange={(e) => setUpdatedRightAnswer(e.target.value)}
              className="w-full border p-2 mb-4 rounded-md"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
              >
                Save Changes
              </button>
              <button
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditQuestionsModel;
