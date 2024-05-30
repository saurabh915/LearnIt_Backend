import Teacher from "../model/teacher.js";
import StudentDomain from "../model/StudentDomain.js";
import TeacherDomain from "../model/TeacherDomain.js";
export const tlogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate if the email and password exist in your MongoDB database
        const user = await Teacher.findOne({ email, password });
        console.log(user);
        if (user) {
            // User exists in the database
            return res.status(200).json({ message: "User validated successfully", success: true ,email: email});
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};



export const slist = async (req, res) => {
    try {
        const {  class_  } = req.body;
console.log(req.body);
        // Validate if the email and password exist in your MongoDB database
        const students = await StudentDomain.find({class : class_ });
      console.log(students);
        if (students) {
            // User exists in the database
            return res.status(200).json({ students: students});
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};


