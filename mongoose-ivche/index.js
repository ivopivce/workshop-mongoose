import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { globalRouter } from "./const/router.const.js";

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

console.log(MONGO_URI)

const app = express();
app.use(express.json());
app.use("/api",globalRouter);

app.listen(process.env.PORT, process.env.HOST, async ()=> {
    await mongoose.connect(MONGO_URI);
    
    console.log("Connect to MongoDB server");

    console.log(`Server listening on port: ${process.env.PORT}`)
});