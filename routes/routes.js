import { slogin } from "../controller/student-contoller.js";
import { slist, tlogin } from "../controller/teacher-controller.js";
import { plogin } from "../controller/parent-controller.js";
import { quiz } from "../controller/quiz-contoller.js";
import { studentdata,cResult ,Usubjects,Dusubjects,dResult} from "../controller/quiz-contoller.js";
import { addNotice, getnotices } from "../controller/notice-controller.js";
import { addEvent, deleteEvent, getAllEvents, getEventByID, getEventIdByDate } from "../controller/event-controller.js";

import express from "express";
import { addTest, getMarks, getTest } from "../controller/test-controller.js";
import { addFeedback, getAllFaculties, getChildByParentData, getFeedbackByFilter } from "../controller/feedback-controller.js";

// import { getmarks } from "../controller/marks-controller.js";
const route = express.Router();

// Your existing routes
route.post('/slogin', slogin);
route.post('/slist', slist);
route.post('/tlogin', tlogin);
route.post('/plogin', plogin);
route.get('/quiz', quiz);
route.get('/cscience')


route.post('/studentdata', studentdata);
route.put('/cResult', cResult);
route.put('/dResult', dResult);
route.post('/subjects', Usubjects);
route.post('/dsubjects', Dusubjects);

// New Notice routes
route.post('/addNotice', addNotice);
route.get('/getnotices', getnotices);




route.post('/tests',addTest)
route.get('/getquiz/:subject',getTest)
route.post('/allmarks',getMarks)



//get all marks till now of student

// route.get('/marks/:student', getmarks)

// Calender Event Handling APIs
route.post('/addEvent', addEvent);
route.delete('/deleteEvent/:id', deleteEvent);
route.get('/getAllEvents',getAllEvents);
route.get('/getEventIdByDate/:id',getEventIdByDate);
route.get('/getEventByID/:id',getEventByID);

// Feedback handling APIs
route.post('/addFeedback',addFeedback);
route.post('/getChildByParentData',getChildByParentData);
route.get('/getAllFaculties', getAllFaculties);
route.get('/getFeedbackByFilter',getFeedbackByFilter);



export default route;
