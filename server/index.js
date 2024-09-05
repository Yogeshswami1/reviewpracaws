import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/reviewRoutes.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://reviewfrontendaws.saumic.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // If you are dealing with cookies or sessions
}));const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

app.use('/api', router);

mongoose.connect(URL).then(()=>{

    console.log("DB connected successfully");

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
    })

}).catch(error => console.log(error));
