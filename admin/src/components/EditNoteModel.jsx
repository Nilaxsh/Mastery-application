// import React, { useState } from 'react';
// import axios from 'axios';
// import { URL_API_URL } from '../constants/Data';

// const EditNoteModel = ({ isOpen, onClose, note, onSave }) => {
//   const [updatedTitle, setUpdatedTitle] = useState(note.title);
//   const [updatedContent, setUpdatedContent] = useState(note.content);
//   const [error, setError] = useState(null);

//   const handleSave = async () => {
//     try {
//       const response = await axios.put(`${URL_API_URL}/notes/${note._id}`, {
//         title: updatedTitle,
//         content: updatedContent,
        
//       });

//       onSave(response.data);
//       onClose();
//     } catch (error) {
//       setError('Error updating note. Please try again.'); // Set error state
//       console.error('Error updating note:', error.message);
//     }
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center px-[10px]">
//           <div className="bg-white md:w-[500px] w-full p-6 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-4">Edit Note</h2>
//             <label className="block mb-2">Title</label>
//             <input
//               type="text"
//               value={updatedTitle}
//               onChange={(e) => setUpdatedTitle(e.target.value)}
//               className="w-full border p-2 mb-4 rounded-md"
//             />
//             <label className="block mb-2">Content</label>
//             <textarea
//               value={updatedContent}
//               onChange={(e) => setUpdatedContent(e.target.value)}
//               className="w-full border p-2 mb-4 rounded-md"
//             />
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             <div className="flex justify-end">
//               <button
//                 onClick={handleSave}
//                 className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
//               >
//                 Save Changes
//               </button>
//               <button
//                 onClick={onClose}
//                 className="bg-gray-500 text-white px-4 py-1 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EditNoteModel;

import React, { useState } from 'react';
import axios from 'axios';
import { URL_API_URL } from '../constants/Data';

const EditNoteModel = ({ isOpen, onClose, note, onSave }) => {
  const [updatedTitle, setUpdatedTitle] = useState(note.title);
  const [updatedContent, setUpdatedContent] = useState(note.content);
  const [updatedImage, setUpdatedImage] = useState(note.image); // Added image state
  const [error, setError] = useState(null);

  const handleSave = async () => {
    try {
      const response = await axios.put(`${URL_API_URL}/notes/${note._id}`, {
        title: updatedTitle,
        content: updatedContent,
        image: updatedImage, // Include image in the request payload
      });

      onSave(response.data);
      onClose();
    } catch (error) {
      setError('Error updating note. Please try again.'); // Set error state
      console.error('Error updating note:', error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Perform any necessary image processing or validation
      setUpdatedImage(file);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center px-[10px]">
          <div className="bg-white md:w-[500px] w-full p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Note</h2>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="w-full border p-2 mb-4 rounded-md"
            />
            <label className="block mb-2">Content</label>
            <textarea
              value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
              className="w-full border p-2 mb-4 rounded-md"
            />
            {/* Image input */}
            <label className="block mb-2">Choose Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
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

export default EditNoteModel;
