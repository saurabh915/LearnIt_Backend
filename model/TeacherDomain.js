import mongoose from "mongoose";

// Define a schema for the Domain data
const TeacherDomainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    allotment: {
        class1: {
            standard: {
                type: String,
                required: true,
            },
            subject: {
                subject1: String,
                subject2: String,
            },
        },
        class2: {
            standard: {
                type: String,
                required: true,
            },
            subject: {
                subject1: String,
                subject2: String,
            },
        },
    },
});

// Define a model for the Domain data
const TeacherDomain = mongoose.model("TeacherDomain", TeacherDomainSchema);

export default TeacherDomain;
