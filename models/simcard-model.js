const mongoose = require('mongoose');

const simcardSchema = new mongoose.Schema({
    simNumber: {
        type: String,
        required: true,
        unique:true
    },
    number: {
        type: String,
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"inactive"
    },
    activeData:{
        type:Date,
    }

});

const SimCard=mongoose.model("SimCard",simcardSchema);

module.exports=SimCard;