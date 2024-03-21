// routes/studentRoutes.js
import express from 'express';
import{getAllStudents,getStudentById,createStudent,updateStudentById} from "../Controllers/studentController.js"
const routerstu = express.Router();

// Define routes
routerstu.get('/stu', getAllStudents);
routerstu.get('/student:id', getStudentById);
routerstu.post('/stu', createStudent);
routerstu.put('/student:id', updateStudentById);

export default routerstu;
