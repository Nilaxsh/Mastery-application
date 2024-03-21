import React, { useState } from 'react';
import NoteList from '../components/NoteList';
import AddNoteModal from '../components/AddNoteModel';

const Notes = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddNote = (newNote) => {
    console.log('New Note:', newNote);
    setModalOpen(false);
  };
  return (
    <>
      <div className='flex gap-[10px] flex-col'>
        <div className='bg-gray-200 py-2 px-2 rounded-md'>
          <div className='flex justify-between'>
            <h2 className='font-medium'>Notes</h2>
            <button className='bg-yellow-500 px-2 py-[2px] rounded-md text-black' onClick={() => setModalOpen(true)}>
              Add Notes
            </button>
          </div>
        </div>
        <div className='overflow-scroll'>
         <NoteList />
        </div>
        
      </div>
      {isModalOpen && (
        <AddNoteModal onClose={() => setModalOpen(false)} onAddNote={handleAddNote} />
      )}
    </>
  );
};

export default Notes;
