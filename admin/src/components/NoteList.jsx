import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_API_URL } from '../constants/Data';
import NoteItem from './NoteItem';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`${URL_API_URL}/notes`);
        if (response.data && Array.isArray(response.data.notes)) {
          setNotes(response.data.notes);
        } else {
          console.error('No notes data found in the response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching notes:', error.message);
      }
    };
    fetchNotes();
  }, []);

  const handleDelete = async (noteId) => {
    try {
      await axios.delete(`${URL_API_URL}/notes/${noteId}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
    } catch (error) {
      console.error('Error deleting note:', error.message);
    }
  };
  return (
    <div className='gap-[10px] flex flex-col '>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} onDelete={() => handleDelete(note._id)} />
      ))}
    </div>
  );
};

export default NoteList;
