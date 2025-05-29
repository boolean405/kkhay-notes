require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const corsOptions = require("./config/corsOptions");
const { validateToken } = require("./utils/validator");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const reqMethodLog = require("./middlewares/reqMethodLog");
const credentials = require("./middlewares/credentials");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
// app.use(cookieParser());
app.use(express.json());
app.use(reqMethodLog);
app.use(credentials);
app.use(cors(corsOptions));

// Route
const noteRoute = require("./routes/note");

app.use("/api/note", validateToken(), noteRoute);

// MongoDB Connection)
mongoose.connection.once("open", () => {
  console.log(`=> Success, MongoDB Connected.`);
  app.listen(port, () => {
    console.log(`=> Server running on port ${port}`);
  });
});

// Error Handler
app.use(notFoundHandler);
app.use(errorHandler);
