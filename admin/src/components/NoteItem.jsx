// import React, { useState } from 'react';
// import EditNoteModel from './EditNoteModel';

// const NoteItem = ({ note, onDelete }) => {
//   const [isEditModalOpen, setEditModalOpen] = useState(false);

//   const handleEditClick = () => {
//     setEditModalOpen(true);
//   };

//   const handleDeleteClick = () => {
//     onDelete(note._id); 
//   };

//   return (
//     <>
//       <div className='bg-gray-200 flex justify-between px-4 py-3 rounded-md items-start md:flex-row flex-col gap-4'>
//         <div>
//          <div><h2>{note.title}</h2></div>
//          <div><p>{note.content}</p></div>
       
//         {note.image&&<img src={note.image} style={{ height: '250px', width: '250px' }} />}
        

//         </div>
//         <div className='flex md:flex-col items-start text-white gap-2 flex-row'>
//           <button className='bg-red-500 px-2 py-[2px] rounded-md' onClick={handleDeleteClick}>
//             Delete
//           </button>
//           <button
//             className='bg-blue-500 px-2 py-[2px] rounded-md w-full'
//             onClick={handleEditClick}
//           >
//             Edit
//           </button>
//         </div>
//       </div>

//       <EditNoteModel
//         isOpen={isEditModalOpen}
//         onClose={() => setEditModalOpen(false)}
//         note={note}  
//         onSave={(updatedNote) => {
//           console.log('Updated Note:', updatedNote);
//           setEditModalOpen(false); 
//         }}
//       />
//     </>
//   );
// };

// export default NoteItem;



// import React, { useState } from 'react';
// import EditNoteModel from './EditNoteModel';

// const NoteItem = ({ note, onDelete }) => {
//   const [isEditModalOpen, setEditModalOpen] = useState(false);

//   const handleEditClick = () => {
//     setEditModalOpen(true);
//   };

//   const handleDeleteClick = () => {
//     onDelete(note._id);
//   };

//   return (
//     <>
//       <div className='bg-gray-200 flex justify-between px-4 py-3 rounded-md items-start md:flex-row flex-col gap-4'>
//         <div>
//           <div>
//             <h2>{note.title}</h2>
//           </div>
//           <div>
//             <p>{note.content}</p>
//           </div>
//         </div>
        
//         {note.image && <img src={note.image} style={{ height: '250px', width: '250px' }} />}

//         <div className='flex md:flex-col items-start text-white gap-2 flex-row'>
//           <button className='bg-red-500 px-2 py-[2px] rounded-md' onClick={handleDeleteClick}>
//             Delete
//           </button>
//           <button
//             className='bg-blue-500 px-2 py-[2px] rounded-md w-full'
//             onClick={handleEditClick}
//           >
//             Edit
//           </button>
//         </div>
//       </div>

//       <EditNoteModel
//         isOpen={isEditModalOpen}
//         onClose={() => setEditModalOpen(false)}
//         note={note}
//         onSave={(updatedNote) => {
//           console.log('Updated Note:', updatedNote);
//           setEditModalOpen(false);
//         }}
//       />
//     </>
//   );
// };

// export default NoteItem;




import React, { useState } from 'react';
import EditNoteModel from './EditNoteModel';

const NoteItem = ({ note, onDelete }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    onDelete(note._id);
  };
  return (
    <>
      <div className='bg-gray-200 flex justify-between px-4 py-3 rounded-md items-start md:flex-row flex-col gap-4'>
        <div>
          <div>
            <h2>{note.title}</h2>
          </div>
          <div>
            <p>{note.content}</p>
          </div>
        </div>
        
        {note.image && <img src={note.image} style={{ height: '250px', width: '250px' }} />}

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

      <EditNoteModel
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        note={note}
        onSave={(updatedNote) => {
          console.log('Updated Note:', updatedNote);
          setEditModalOpen(false);
        }}
      />
    </>
  );
};

export default NoteItem;

