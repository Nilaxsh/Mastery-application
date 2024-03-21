import mongoose from 'mongoose';


const msgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});


const Message = mongoose.model("MESSAGE", msgSchema);

export default Message;


