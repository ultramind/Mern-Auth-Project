import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ultra Auth root page'})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});