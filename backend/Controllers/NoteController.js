

import Note from '../models/Note.js';
import cloudinary from '../utils/cloudinary.js';

// Create a note with an image
const createNote = async (req, res) => {
  try {
    const { title, content, image } = req.body;
  
    
    if(image){
       // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(image, {
        folder: 'notes',
      });
       console.log(result);
      const newNote = new Note({
        title,
        content,
        image: result.secure_url,
      });
  
      await newNote.save();
      console.log("image provied");
      res.status(201).json({ message: 'Note created successfully.', note: newNote });


    }else{
      const newNote = new Note({
        title,
        content,
      });
  
      await newNote.save();
      console.log("image not provided");
      res.status(201).json({ message: 'Note created successfully.', note: newNote })
    }

    
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all notes
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.json({ notes });
  } catch (error) {
    console.error('Error getting notes:', error);
    res.status(500).json({ error: 'Note not found' });
  }
};

// Get a specific note by ID
const getNoteById = async (req, res) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findById(noteId);

    if (note) {
      res.json({ note });
    } else {
      res.status(404).json({ error: 'Note not found.' });
    }
  } catch (error) {
    console.error('Error getting note:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a note by ID
const updateNoteById = async (req, res) => {
  try {
    const { noteId } = req.params;
    const { title, content, image } = req.body;

    // If there is an image, upload it to Cloudinary
    if (image) {
      const result = await cloudinary.v2.uploader.upload(image, {
        folder: 'notes',
        width: 500,
        height: 500,
        crop: 'limit',
      });

      req.body.image = result.secure_url;
    }

    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title, content, image },
      { new: true }
    );

    if (updatedNote) {
      res.json({ message: 'Note updated successfully.', note: updatedNote });
    } else {
      res.status(404).json({ error: 'Note not found.' });
    }
  } catch (error) {
    console.error('Error updating note:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a note by ID
const deleteNoteById = async (req, res) => {
  try {
    const { noteId } = req.params;

    const deletedNote = await Note.findByIdAndDelete(noteId);

    if (deletedNote) {
      res.json({ message: 'Note deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Note not found.' });
    }
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { createNote, getAllNotes, getNoteById, updateNoteById, deleteNoteById };