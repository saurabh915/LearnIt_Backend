import Feedback from '../model/feedback.js'
import Parent from '../model/parent.js';
import Teacher from '../model/teacher.js';



export const addFeedback = async (req, res) => {
    try {

        const teacherData=req.body.teacherData;
        const parentData=req.body.parentData;
        const studentData=req.body.studentData;
        const satisfy=req.body.satisfy;
        const feel=req.body.feel;
        const additional_feedback=req.body.additional_feedback;
        
        const newFeedback = new Feedback({
            teacherData:teacherData,
            parentData:parentData,
            studentData:studentData,
            feel:feel,
            satisfy:satisfy,
            additional_feedback:additional_feedback,
            date: Date.now()
        });

        await newFeedback.save();

        res.status(201).json(newFeedback);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

export const getChildByParentData = async(req,res) =>{

    try
    {
        const {email} = req.body;
        const child= await Parent.findOne({email:email});

        if (!child) {
                    return res.status(404).json({ message: 'Parent not found' });
        }
        res.status(200).json(child);
        
    }
    catch (error) 
    {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }

};


export const getAllFaculties = async(req,res)=>{
    
    try
    {
        const response = await Teacher.find({});

        if(!response){
            return res.status(404).json({message:"No respone found !"});
        }

        return res.status(200).json(response);

   } catch(error){
        
        console.log(error);
   }


};


export const getFeedbackByFilter = async(req,res)=>
{
    const { year, month } = req.query;
    
    try {
        let filter = {};

        if (year && month) {
            filter.date = {
                $gte: new Date(year, month - 1, 1),
                $lt: new Date(year, month, 0)
            };
        }

        if (year && !month) {
            filter.date = {
                $gte: new Date(year, 0, 1),
                $lt: new Date(parseInt(year) + 1, 0, 0)
            };
        }

        const feedbacks = await Feedback.find(filter);

        res.json(feedbacks);
    } catch (error) {
        console.error("Error filtering feedbacks:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};