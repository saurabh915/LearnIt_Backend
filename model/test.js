import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    correct_answer: {
        type: String,
        required: true,
    },
});

const quizSchema = new mongoose.Schema({
    quiztype:{
        type:String,
        required:true
    },

    title: {
        type: String,
        required: true,
    },
    content:{
        type:String,
        required:false
    },
    questions: {
        type: [questionSchema],
        required: true,
    },
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
