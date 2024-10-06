const express = require('express');
const app = express();
require("dotenv").config();
const connectDB = require("./DB/connection");
const tasks = require("./routes/tasks");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");
const cors = require("cors");
// middlewares
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// middleware
app.use("/api/v1/tasks", tasks); // router
app.use(notFound); // route exceptions
app.use(errorHandlerMiddleware); // erorr handler next()

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    if (process.env.PORT) {
      app.listen(port, console.log(`Server is on ${process.env.PORT}`));
    } else {
      app.listen(port, console.log(`Server is on ${port}`));
    }
  } catch (error) {
    console.log(error);
  }
};

start();

