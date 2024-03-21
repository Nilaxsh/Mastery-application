import Message from './path-to-your-model'; // Update the path accordingly

// Create a new message
const createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new Message({ name, email, message });
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Export the createMessage method
export { createMessage };
