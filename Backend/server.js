//import express to invoke with the app
const express = require("express");

// import cors to disable the cors policy error
const cors = require("cors");

//import body-paser to convert json format data in to server objects
const bodyParser = require("body-parser");

//import mongoose
const mongoose = require("mongoose");


//import Routes 
const user = require("./Routes/userRoutes");

//anodya routes
const TimetableRoutes = require ('./Routes/TimetableRoutes');

//Disni Routes
const EmpAttendace= require('./Routes/EmpAttendace')
const EmpLeaveForm=require('./Routes/EmpLeaveForm')

//invoke app 
const app = express();

//declare the port to run the backend
const PORT = process.env.PORT || 5000;

//middlewares
app.use(
  cors({
    origin: "*", 
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dotenv = require("dotenv");
dotenv.config();


//use server to communicate with routes
//disni
app.use(EmpAttendace);
app.use(EmpLeaveForm);

//ramona
app.use("/user",user);

//anodya
app.use(TimetableRoutes);


//connect the app with mongo db with mongoose
mongoose.connect(
  process.env.DB_URL, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`Backend App is running on ${PORT}`);
});



