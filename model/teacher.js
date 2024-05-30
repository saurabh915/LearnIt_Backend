import mongoose from "mongoose";

// Define a schema for the teacher data
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Define a model for the teacher data
const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
