import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();
const mongoURL = process.env.MONGO_URL

app.use(cors());
app.use(bodyParser.json());

app.get('/',async (req, res) => {
    try {
        res.json({message:'Snowin Cafasso'});
    } catch (error) {
        res.status(500).json({message:'Error occured',error});
    }
});

mongoose.connect(mongoURL)
    .then(()=>{console.log("DB Connected")})
    .then(()=>{
        app.listen(3000,()=>{console.log("Server Started")})
    })  
    .catch((error)=>{console.log(error)});