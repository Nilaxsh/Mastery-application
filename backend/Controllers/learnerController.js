import Learner from '../models/learnerModel.js';

// Get all learners
 const getAllLearners = async (req, res) => {
    try {
        const learners = await Learner.find();
        res.json(learners);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get learner by ID
 const getLearnerById = async (req, res) => {
    const { id } = req.params;

    try {
        const learner = await Learner.findById(id);
        if (!learner) {
            return res.status(404).json({ error: 'Learner not found' });
        }
        res.json(learner);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Create a new learner
 const createLearner = async (req, res) => {
    const { name, address, email, phoneNumber } = req.body;

    try {
        const newLearner = new Learner({ name, address, email, phoneNumber });
        await newLearner.save();
        res.json(newLearner);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update learner by ID
 const updateLearnerById = async (req, res) => {
    const { id } = req.params;
    const { name, address, email, phoneNumber } = req.body;

    try {
        const updatedLearner = await Learner.findByIdAndUpdate(
            id,
            { name, address, email, phoneNumber },
            { new: true }
        );

        if (!updatedLearner) {
            return res.status(404).json({ error: 'Learner not found' });
        }

        res.json(updatedLearner);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete learner by ID
 const deleteLearnerById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedLearner = await Learner.findByIdAndDelete(id);

        if (!deletedLearner) {
            return res.status(404).json({ error: 'success fully deleted' });
        }

        res.json(deletedLearner);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export{getAllLearners,getLearnerById ,createLearner ,updateLearnerById,deleteLearnerById}