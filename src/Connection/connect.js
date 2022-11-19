const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Sarhan:sarhan123@instaclone.8jpp1dc.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Login successful");
  })
  .catch((err) => {
    console.log(err);
  });
