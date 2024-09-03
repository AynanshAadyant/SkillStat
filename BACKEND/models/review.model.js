import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: //name of the user, taken from account logged in
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: //brief review put in by user
    {
        type: String, 
        default: "",
        maxLength: 100
    },
    rating:{ //rating given by user to course
        type: Number,
        enum: [ 0, 1, 2, 3, 4, 5],
        required: true
    },
    createdAt:{ 
        type: Date,
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
})

export const Review = mongoose.model('Review', reviewSchema )