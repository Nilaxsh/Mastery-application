

import React, { useState, useEffect } from 'react';

const AllNotes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:5007/api/users/notes');
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Fetched data:', data);
      setNotes(data.notes || []);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="notee">
      <h1>All Notes</h1>
      {notes.length > 0 ? (
        <div>
          {notes.map((note) => (
            <div key={note._id} className="note">
              {/* {note.image && <img src={note.image} style={{ height: '250px', width: '250px' }} />} */}
              {note.title && <h3 style={{ color: 'blue' }}>{note.title}</h3>}
              {note.content && <p>{note.content}</p>}
              <br></br>
              {note.image && <img src={note.image} style={{ height: '250px', width: '400px' }} />}
            </div>
          ))}
        </div>
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
};

<div></div>

export default AllNotes;


