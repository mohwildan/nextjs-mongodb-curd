import mongoose from "mongoose";


const Users = new mongoose.Schema({
    nama:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    }
})


export default mongoose.models.User || mongoose.model("User", Users)