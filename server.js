//calling modules

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//server port
const port = 3000;

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server

app.listen(port, () => {
  console.log("Server is listening to port: " + port);
});

//routes

//get data by http.//localhost:3000/get

app.get("/get", (req, res) => {
  res.send(projectData);
});

//post data by http.//localhost:3000/post

app.post("/post", (req, res) => {
  projectData = {
    temperature: req.body.temperature,
    date: req.body.newDate,
    textarea: req.body.textarea,
  };
  res.end();
});
