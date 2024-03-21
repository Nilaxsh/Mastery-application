import React, { useState } from 'react';
import EditQuestionsModel from './EditQuestionsModel';

const QuestionsItem = ({ question, onDelete }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    onDelete(question._id); 
  };

  return (
    <>
      <div className='bg-gray-200 flex justify-between px-4 py-3 rounded-md items-start md:flex-row flex-col gap-4'>
        <div>
          <h2>{question.questionNumber}</h2>
          <h2>{question. question}</h2>
          <p>{question.answers}</p> 
          <p>{question. rightanswer}</p>
        </div>
        {question.image && <img src={question.image} style={{ height: '250px', width: '250px' }} />}

        <div className='flex md:flex-col items-start text-white gap-2 flex-row'>
          <button className='bg-red-500 px-2 py-[2px] rounded-md' onClick={handleDeleteClick}>
            Delete
          </button>
          <button
            className='bg-blue-500 px-2 py-[2px] rounded-md w-full'
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>

      <EditQuestionsModel
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        question={question}  
        onSave={(updatedquestion) => {
          console.log('Updated question:', updatedquestion);
          setEditModalOpen(false); 
        }}
      />
    </>
  );
};

export default QuestionsItem;
