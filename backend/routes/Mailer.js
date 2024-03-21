import { Router } from 'express';
import nodemailer from "nodemailer"

const router = Router();
export default router;

// Your stripe secret key

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:587,
    secure:false,
    auth: {
    user: 'nilaxsakana@gmail.com',
    pass: 'lijqpnuzxsyqsnkv',
    },
   });
   
   router.post("/sentmail", async (req, res) => {
    const { token } = req.body;
    try {
    const mailOptions = {
    from: 'nilaxsakana@gmail.com',
    to: token.email,
    subject: 'Payment Receipt',
    html: `<p>Thank you for your payment!</p>`,
    };
   
    await transporter.sendMail(mailOptions);
   
    res.status(201).json({ success: true });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
    }
   });

