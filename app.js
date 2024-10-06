const express = require('express');
const app = express();
require("dotenv").config();
const connectDB = require("./DB/connection");
const tasks = require("./routes/tasks");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");

// middlewares
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// middleware
app.use("/api/v1/tasks", tasks); // router
app.use(notFound); // route exceptions
app.use(errorHandlerMiddleware); // erorr handler next()

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is on 3000"));
  } catch (error) {
    console.log(error);
  }
};

start();

