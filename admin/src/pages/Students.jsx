import React, { useState } from 'react';
import StudentsList from '../components/StudentList';

import AddStudentModal from '../components/AddStudentModal';

const Questions = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddStudents = (newStudents) => {
    console.log('New Students:', newStudents);
    setModalOpen(false);
  };

  return (
    <>
      <div className='flex gap-[10px] flex-col'>
        <div className='bg-gray-200 py-2 px-2 rounded-md'>
          <div className='flex justify-between'>
            <h2 className='font-medium'>Students</h2>
            <button
              className='bg-yellow-500 px-2 py-[2px] rounded-md text-black'
              onClick={() => setModalOpen(true)}
            >
              Add Students
            </button>
          </div>
        </div>
        <div className='overflow-scroll'>
        <StudentsList />
        </div>
      </div>
      {isModalOpen && (
        <AddStudentModal onClose={() => setModalOpen(false)} onAddStudents={handleAddStudents} />
      )}
    </>
  );
};

export default Questions;
