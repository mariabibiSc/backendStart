const express = require("express");
const connectDB = require("./db");
const env = require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
connectDB();
app.get("/", (req, res) => {
  res.status(200).json({ data: "maria" });
});
app.listen(PORT, () => {
  console.log(`Express server running on port : ${PORT}`);
});
