// controllers/notice-controller.js
import Notice from "../model/notice.js";

// Controller to add a new notice
export const addNotice = async (req, res) => {
    try {
        const notice  = req.body;

        const newNotice = new Notice({notice: { user: notice.user, notice:notice.notice }});
        await newNotice.save();

        res.status(201).json({ message: 'Notice added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
export const getnotices = async (req, res) => {
    try {
      

        const collections = await Notice.find({});

        res.status(201).json(collections);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
