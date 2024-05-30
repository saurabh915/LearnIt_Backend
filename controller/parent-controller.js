import parent from "../model/parent.js";

export const plogin = async (req, res) => {
    try {
        const { email, password ,childname} = req.body;

        // Validate if the email and password exist in your MongoDB database
        const user = await parent.findOne({ email, password ,childname});
        console.log(user);
        if (user) {
            // User exists in the database
            return res.status(200).json({ message: "User validated successfully", success: true ,user: user});
        } else {
            // User does not exist in the database
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};
