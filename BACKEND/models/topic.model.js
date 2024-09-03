import mongoose from "mongoose";

const topicSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        default: ""
    },
    subtopics:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subtopic"
    }, 
    completed:{
        type: Boolean,
        default: false
    }
})

export const Topic = mongoose.model("Topic", topicSchema );