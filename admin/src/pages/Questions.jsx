import React, { useState } from 'react';
import QuestionsList from '../components/QuestionsList';

import AddQuestionsModal from '../components/AddQuestionsModel';

const Questions = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddQuestions = (newQuestions) => {
    console.log('New Questions:', newQuestions);
    setModalOpen(false);
  };

  return (
    <>
      <div className='flex gap-[10px] flex-col'>
        <div className='bg-gray-200 py-2 px-2 rounded-md'>
          <div className='flex justify-between'>
            <h2 className='font-medium'>Questions</h2>
            <button
              className='bg-yellow-500 px-2 py-[2px] rounded-md text-black'
              onClick={() => setModalOpen(true)}
            >
              Add Questions
            </button>
          </div>
        </div>
        <div className='overflow-scroll'>
        <QuestionsList />
        </div>
      </div>
      {isModalOpen && (
        <AddQuestionsModal onClose={() => setModalOpen(false)} onAddQuestions={handleAddQuestions} />
      )}
    </>
  );
};

export default Questions;
