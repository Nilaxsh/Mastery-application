import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
   
  },
  content: {
    type: String,
   
  },
  image:{
    type: String,
  }

});

const Note = mongoose.model('Note', noteSchema);

export default Note;


