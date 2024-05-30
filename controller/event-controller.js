import Event from '../model/event.js'; // Assuming your Event schema is defined in this file

export const addEvent = async (req, res) => {
    try {
        const { title, date} = req.body; 
        var datetimeString = (date) + 'T' + '00:00' +':00.000Z'; //iso format
        console.log(datetimeString);
        const newEvent = new Event({ title, date:datetimeString });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id; // Assuming you pass the event ID in the request parameters
        const deletedEvent = await Event.findByIdAndDelete(eventId);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getEventByID = async (req, res) => {
    try {
        var idd=req.params.id;
        const events = await Event.findOne({_id:idd});
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getEventIdByDate = async (req, res) => {
    try {

        console.log("getEventByID");
        var response = await Event.find({});
        //console.log(response);

        var fixString ="";

        for(var i=0 ; i<response.length;i++)
        {
            var dtString=JSON.stringify(response[i].date);

            var slicer1=dtString.slice(1,11);

            console.log(slicer1);
            if(slicer1 === req.params.id){
                fixString = dtString;
                console.log("found");
                console.log(fixString);
                break;
            }


        }

        if(fixString === ""){
            return res.status(404).json({ eventId: null});
        }

        

        var datetimeString = fixString.slice(1,-1); // Concatenate time part to make it a datetime string in ISO format
        console.log(datetimeString);
        const event = await Event.findOne({ date : datetimeString }); // Assuming date is stored in the same format in the database
        if (!event) {
            return res.status(404).json({ eventId: null});
        }
        console.log(event);
        res.json({ eventId: event._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

