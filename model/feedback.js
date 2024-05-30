import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    teacherData: {
        type: String,
    },
    parentData: {
        type: String,
    },
    studentData: {
        type: String,
    },
    feel: {
        type: String,
    },
    satisfy: {
        type: String,
    },
    additional_feedback: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Feedback = mongoose.model('Feedbacks', feedbackSchema);
export default Feedback;