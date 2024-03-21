import React, { useState } from 'react';
import axios from 'axios';
import { URL_API_URL } from '../constants/Data';

const AddNoteModal = ({ onClose, onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image,setImage] = useState(null);
  const handleAddNote = async () => {
    try {
      const response = await axios.post(`${URL_API_URL}/notes`, {
        title,
        content,
        image
      });
            console.log(response)
      onAddNote(response.data); 
      onClose();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleImage =(e)=>{
    const file = e.target.files[0];
    TransformFileData(file)
  }
  
  const TransformFileData = (file) => {
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
        <h2 className="text-2xl font-semibold mb-4">Add Note</h2>
        <label className="block mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        <label className="block mb-2">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        <input type='file'onChange={(e) => handleImage(e)}/>
        <div className="flex justify-end">
          <button
            onClick={handleAddNote}
            className="bg-green-500 text-white px-4 py-1 rounded mr-2"
          >
            Add Note
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

export default AddNoteModal;




