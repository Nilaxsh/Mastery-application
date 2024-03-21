import React, { useState } from 'react';
import EditStudentModal from './EditStudentModal'; // Assuming you have an EditStudentModal component

const StudentItem = ({ student, onDelete }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    onDelete(student._id);
  };

  return (
    <>
      <div className='bg-gray-200 flex justify-between px-4 py-3 rounded-md items-start md:flex-row flex-col gap-4'>
        <div>
          <h2>{student. name}</h2>
          <p>{student.address}</p>
          <p>{student. nic}</p>
          <p>{student. phoneNumber}</p>
          <p>{student.age}</p>
          <p>{student.payment}</p>
         
        </div>
        <div className='flex md:flex-col items-start text-white gap-2 flex-row'>
            {/* <button className='bg-red-500 px-2 py-[2px] rounded-md' onClick={handleDeleteClick}>
              Delete
            </button> */}
          <button
            className='bg-blue-500 px-2 py-[2px] rounded-md w-full'
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>

      <EditStudentModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        student={student}
        onSave={(updatedStudent) => {
          console.log('Updated Student:', updatedStudent);
          setEditModalOpen(false);
        }}
      />
    </>
  );
};

export default StudentItem;
