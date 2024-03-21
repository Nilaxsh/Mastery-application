import mongoose from 'mongoose';

const learnerSchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    phoneNumber: String,
});

const Learner = mongoose.model('Learner', learnerSchema);

export default Learner;
