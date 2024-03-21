import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_API_URL } from '../constants/Data';
import StudentItem from './StudentItem'; 

const StudentList = () => {
  const [students, setStudents] = useState([{}]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${URL_API_URL}/stu`);
        if (response.data) {
          setStudents(response.data);

        } else {
          console.error('No students data found in the response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching students:', error.message);
      }
    };
    fetchStudents();
  }, []);

  const handleDelete = async (studentId) => {
    try {
      await axios.delete(`${URL_API_URL}/students/${studentId}`);
      setStudents((prevStudents) => prevStudents.filter((student) => student._id !== studentId));
    } catch (error) {
      console.error('Error deleting student:', error.message);
    }
  };

  return (
    <div className='gap-[10px] flex flex-col '>
      {students.map((student) => (
        <StudentItem key={student._id} student={student} onDelete={() => handleDelete(student._id)} />
      ))}
    </div>
  );
};

export default StudentList;
