
const express = require("express");
require("dotenv").config();
const app = express();

// route
app.get("/", (req, res) => {
  // Sending This is the home page! in the page
  res
    .status(200)
    .send(`Deployed to ec2 by using github-actions. This is the home page and running on ${process.env.PORT}`);
});

// Listening to the port 
let PORT = process.env.PORT ? process.env.PORT : 8000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running...`);
});
