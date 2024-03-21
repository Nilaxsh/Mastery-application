import React, { useState } from 'react';
import axios from 'axios';
import { URL_API_URL } from '../constants/Data';

const AddStudentsModal = ({ onClose, onAddStudents }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [nic, setNic] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');



  const handleAddStudents = async () => {
    try {
      const response = await axios.post(`${URL_API_URL}/stu`, {
        name,
        nic,
        phoneNumber,
        address,
        age,
        payment,
      });

      onAddStudents(response.data);
      onClose();
    } catch (error) {
      console.error('Error adding Questions:', error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center px-[10px]">
      <div className="bg-white md:w-[500px] w-full p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add Students</h2>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        <label className="block mb-2">Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        <label className="block mb-2">NIC</label>
        <input
          type="text"
          value={nic}
          onChange={(e) => setNic(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        <label className="block mb-2">Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        
        <label className="block mb-2"> Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border p-2 mb-4 rounded-md"
        />
        <div className="flex justify-end">
          <button
            onClick={handleAddStudents}
            className="bg-green-500 text-white px-4 py-1 rounded mr-2"
          >
            Add Students
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

export default AddStudentsModal;
