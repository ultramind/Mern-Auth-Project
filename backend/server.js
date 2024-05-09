import express from 'express';
import userRoute from './routes/userRoute.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
const app = express();
const PORT = process.env.PORT || 8000;


// middleware

app.use("/api/users", userRoute)


// root app route
app.get('/', (req, res) => {
    res.status(200).json({message: 'Ultra Auth root page'})
})

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});