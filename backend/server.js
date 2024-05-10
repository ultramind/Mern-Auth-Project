import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import connectDB from './configs/dbConn.js';


const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

// dbConnection
connectDB()

//route middleware
app.use("/api/users", userRoute)


// root app route
app.get('/', (req, res) => {
    res.status(200).json({message: 'Ultra Auth root page'})
})

// error handling middleware
app.use(notFound)
app.use(errorHandler)

// app listing on port
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});