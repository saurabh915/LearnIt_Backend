import mongoose from "mongoose";

// Define the schema for the event
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
