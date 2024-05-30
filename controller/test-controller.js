import StudentDomain from "../model/StudentDomain.js";
import MarksDomain from "../model/marks.js";
import Quiz from "../model/test.js";

export const addTest = async (req, res) => {
  try {
        // Validate if the email and password exist in your MongoDB database
        const user = await StudentDomain.find({  });
   console.log(user);
        if (user) {


          for (let i = 0; i < user.length; i++) {
           
            
            // User exists in the database
            let CMarks = user[i]?.CMarks;
            let DMarks = user[i]?.DMarks;
            
            
            if((DMarks?.science !== undefined && DMarks?.maths !== undefined && DMarks?.social !== undefined))
              {
                console.log("I AM INSIDE");
                
                const user2 = await MarksDomain.findOne({ email:user[i].email });
                console.log(user2);
                let currentMarks = {id:1,...CMarks}
                let dynamicMarks = {id:1,...DMarks}
                console.log(currentMarks);
                
                
                
                if(!user2){
                  
                  let  newuser = {
                    
                    email:user[i].email,
                    CMarks:[currentMarks],
                    DMarks:[dynamicMarks]
                  }
                  console.log(newuser);
                  const newMarks = new MarksDomain(newuser);
                  console.log(newMarks);
                  await newMarks.save();
                } 
                else{
                  const filter = { email:user[i].email };
                  let clength =  user2.CMarks.length;
                  let dlength =  user2.DMarks.length;
                  console.log(user2);
                  
                  var updateDoc = {
                    $set: {
                      "CMarks" : [...user2.CMarks,{id: clength+1 , ...CMarks}],
                      "DMarks" : [...user2.DMarks,{id: dlength+1 , ...DMarks}]
                    },
                  };
                  const options = { upsert: false };
                  
                  const mark = await MarksDomain.findOneAndUpdate(filter, updateDoc, options);
                  console.log(mark);
                }
                
              }
              
              
            }
            } else {
              // User does not exist in the database
              return res.status(401).json({ message: "Invalid email or password" });
            }




















    const { test } = req.body;
    console.log(req.body.content);

    const newTest = new Quiz({
      quiztype: req.body.questions.quiztype,
      title: req.body.questions.title,
      content: req.body.questions.content,
      questions: req.body.questions.questions,
    });
    await newTest.save();
 
   let a =  await StudentDomain.updateMany({}, { $unset: { CMarks: 1,DMarks:1 } }
    );
    console.log(a);
    res.status(201).json({ message: "test added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getTest = async (req, res) => {
  try {
    const subject = req.params.subject;
    let test;
    let subjecttest;
    switch (subject) {
      case "social1":
        test = await Quiz.find(
          { quiztype: "currentQuiz", title: "social1" },
          { sort: { _id: -1 } }
        );
        console.log(test[test.length-1]);
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "science1":
        test = await Quiz.find(
          { quiztype: "currentQuiz", title: "science1" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "maths1":
        test = await Quiz.find(
          { quiztype: "currentQuiz", title: "maths1" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "social2":
        test = await Quiz.find(
          { quiztype: "dynamicQuiz", title: "social2" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "science2":
        test = await Quiz.find(
          { quiztype: "dynamicQuiz", title: "science2" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "maths2":
        test = await Quiz.find(
          { quiztype: "dynamicQuiz", title: "maths2" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;
      case "social2":
        test = await Quiz.find(
          { quiztype: "dynamicQuiz", title: "socail2" },
          { sort: { _id: -1 } }
        );
        subjecttest = await Quiz.findById(test[test.length-1]);
        res.status(201).json({ message: "Quiz fetched successfully", subjecttest });
        break;

      default:
        res.status(404).json({ message: "invalid subject" });
        break;
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};



export const getMarks = async (req, res) => {
  try {
    const { email } = req.body;
  let marks = await MarksDomain.find({email})
   console.log(marks);
    res.status(201).json({ message: "all marks fetched successfully" ,marks});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};