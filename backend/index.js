import dotenv from 'dotenv'
import express from 'express'
import { notFound,errorHandler} from "./middleware/errorMiddleware.js";
import cookieParser from 'cookie-parser';
import dbConnect from "./utils/dbConnect.js";
import router from './routes/QuizRoutes.js';
import route from './routes/NoteRoutes.js';
import roteLearn from './routes/learnerRoutes.js';
import routerstu from './routes/studentRoutes.js';
import cors from 'cors'
import userRoutes from "./routes/userRoutes.js"
 import router1 from "./routes/Payment.js"
 import mail from "./routes/Mailer.js"


const app = express();
app.use(cors())
// app.use(express.json());
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded( {extended: true }))
app.use(cookieParser())
dotenv.config();
const port =process.env.PORT


dbConnect()

app.use("/api/users",userRoutes)
app.get("/",(req,res) => res.send("server is ready"));
app.use("/api/users",router)
app.use("/api/users",route)
app.use("/api/users",mail)

 app.use("/api/users",roteLearn)
  app.use("/api/users",routerstu)

  app.use("/api/users",router1)


app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
}) 



