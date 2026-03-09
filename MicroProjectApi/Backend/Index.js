require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const errormiddleware = require("./Middlewares/errormiddleware");
const authRoute = require("./Router/AuthRouter");
const GoalRouter = require("./Router/GoalRouter");

const PORT = process.env.PORT || 8000;
const Mongo_Url = process.env.MONGO_URL;

// MongoDB connection
mongoose
  mongoose
  .connect(Mongo_Url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Route
app.use("/", authRoute);
app.use("/", GoalRouter);

// Error middleware
app.use(errormiddleware);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

