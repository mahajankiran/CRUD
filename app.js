const express = require("express");
const mongoose = require("mongoose");

const app = express();

//url to connect to database
const url = "mongodb://localhost/AlienDBX";

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected to database....");
});

app.use(express.json())
const AlienRouter = require('./routers/alien');

//Middleware whenever request comes to alien got to Alienrouter
app.use('/aliens',AlienRouter);

app.listen(9000, () => {
  console.log("Server started");
});
