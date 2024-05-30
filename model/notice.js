// notice.js
import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
   
    notice: {
        type: Object,
        required: true,
    },
});

const Notice = mongoose.model('Notice', noticeSchema);

export default Notice;
