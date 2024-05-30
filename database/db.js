import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
const connection = async()=>{
const URL = `mongodb+srv://prajktapotdar8330:praju5464@cluster0.huzovs4.mongodb.net/LearnIt?retryWrites=true&w=majority`
    try {

    await mongoose.connect(URL,{useUnifiedTopology:true})
console.log("database connected successfully");
} catch (error) {
    console.log("error while connecting database ",error.message);
}
}

export default connection;