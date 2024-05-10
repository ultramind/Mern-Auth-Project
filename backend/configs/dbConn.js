import mongoose from "mongoose";

const connectDB = async ()=>{  
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        conn && console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error connecting to MongoDB ${error.message}`)
    }
}

export default connectDB