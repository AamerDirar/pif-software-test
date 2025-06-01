import express from "express";
import connectDB from "./lib/connectDB.js";

const app = express();

app.listen(3000, () => {
  connectDB();
  console.log("Server is running!");
});