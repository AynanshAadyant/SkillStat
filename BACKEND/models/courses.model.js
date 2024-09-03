import mongoose from 'mongoose'

const coursesSchema = mongoose.Schema({
    courseTitle: { //courses title
        type: String,
        required: true
    },
    topics: { //topics under course
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic"
    },
    TimeSpent: { //total time spent on course reading
        type: Number, //in minutes
        required: true
    },
    percentageComplete: { //shows percentage of courses completed
        type: mongoose.Types.Decimal128,
        default: 0.0
    },
    createdBy: { //shows the contributor who has created this course
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Files: { //array for storing string names of files to be attached
        type: [String],
        required: true
    },
    review:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    },
    completed: {
        type: Boolean, 
        default: false
    }
}
)

export const Course = mongoose.model("Course", courseSchema );