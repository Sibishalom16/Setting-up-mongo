require("dotenv").config();  // Load environment variables
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

console.log("MONGO_URI from .env:", process.env.MONGO_URI); // Debugging

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch(err => console.error(`Error connecting to database: ${err.message}`));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
