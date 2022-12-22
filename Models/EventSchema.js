const  mongoose = require("mongoose");

const Schema = mongoose.Schema

const EventSchema = new Schema({
    EID:{
        type:mongoose.isValidObjectId,
        
    },
    title:{
        type:String,
        require:true,
        maxlength:25
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String

    },
    video:{
        type:String

    },
    maximum_participants: {
        type: Number,
        required: true,
    },
    rounds:{
        round1:{
            description:{
                type:String
            }
        },
        round2:{
            discription:{
                type:String

            }
           
        }
    }
    
    
})

export default mongoose.model("Event",EventSchema)