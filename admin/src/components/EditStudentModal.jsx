import React, { useState } from 'react';
import axios from 'axios';
import { URL_API_URL } from '../constants/Data';

const EditQuestionsModel = ({ isOpen, onClose, student, onSave }) => {
    const [name, setName] = useState(student.name);
    const [age, setAge] = useState(student.age);
    const [nic, setNic] = useState(student.nic);
    const [address, setAddress] = useState(student.address);
    const [payment, setPayment] = useState(student.payment);
    const [phonenumber, setPhonenumber] = useState(student.phonenumber);
    const [error ,setError] = useState("")

  const handleSave = async (studentId) => {
    try {
      const response = await axios.put(`${URL_API_URL}/student/${studentId}`, {
        name:name,
        nic:nic,
        phonenumber:phonenumber,
        address:address,
        age:age,
        payment:payment,
      });

      onSave(response.data);
      onClose();
    } catch (error) {
      setError('Error updating questions. Please try again.'); // Set error state
      console.error('Error updating questions:', error.message);
    }
  };

  return (
    <>
      {isOpen && (
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
            <label className="block mb-2">N.I.C</label>
            <input
              type="text"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="w-full border p-2 mb-4 rounded-md"
            />
            <label className="block mb-2">Phone Number</label>
            <input
              type="text"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="w-full border p-2 mb-4 rounded-md"
            />
            <label className="block mb-2">Payment</label>
            <input
              type="text"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
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
                onClick={()=>handleSave(student._id)}
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
      )}
    </>
  );
};

export default EditQuestionsModel;
