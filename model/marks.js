import mongoose from "mongoose";

// Define a schema for the student data
const MarksDomainSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    

    CMarks: [{
    id:{
type:Number,

default:1
        },
     
        maths: {
            type: Number,
          
        },
        science: {
            type: Number,
           
        },
        social: {
            type: Number,
        
        },
    }],
    DMarks: [{
        id:{
            type: Number,
         
            default:1
        },

        maths: {
            type: Number,
          
        },
        science: {
            type: Number,
          
        },
        social: {
            type: Number,
         
        },
    }]
});

// model for the student data
const MarksDomain = mongoose.model("marks", MarksDomainSchema);

export default MarksDomain;

