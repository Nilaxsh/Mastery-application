import express from 'express';
import {
  createNote, getAllNotes, getNoteById, updateNoteById, deleteNoteById

} from '../Controllers/NoteController.js';

const route = express.Router();

// Create a note (accessible only to admins)
route.post('/notes', createNote);

// Get all notes
route.get('/notes', getAllNotes);

// Get a specific note by ID
route.get('/notes/:noteId', getNoteById);

// Update a note by ID (accessible only to admins)
route.put('/notes/:noteId', createNote);

// Delete a note by ID (accessible only to admins)
route.delete('/notes/:noteId', deleteNoteById);

export default route;



