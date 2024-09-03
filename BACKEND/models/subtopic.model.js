import mongoose from 'mongoose'

const subtopicSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    content:
    {
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    }
}
)

export  const Subtopic = mongoose.model( "Subtopic", subtopicSchema);