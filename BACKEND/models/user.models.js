import mongoose from 'mongoose'

//schema for user
const userSchema = mongoose.Schema(
    {
        username: { //takes username
            type: String,
            required: true,
            default: ""
        },
        email:
        {
            type: String,
            required: true
        },
        password:
        {
            type: String,
            required: true
        },
        timeSpent:{
            type: Number, //in minutes
            default: 0
        },
        coursesTaken:{ //ongoing courses
            type: mongoose.Schema.Types.ObjectId,
            ref: Courses
        },
        coursesCompleted:{ //courses complete
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        },
        coursesCreated:{ //courses contributed
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    }
);

export const User = mongoose.model( 'User', userSchema );

