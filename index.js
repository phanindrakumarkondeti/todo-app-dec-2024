const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;
//ejs engine
app.set("view engine", "ejs");
app.use(express.json());
const connectionUrl = "mongodb://localhost:27017/todoDb";
mongoose
  .connect(connectionUrl)
  .then( () => { console.log("Database is connected successfully")})
  .catch( (error) => { console.log(error.message)})
app.get('/', (req, res) => {
    res.send("welcome to TODO-APP")
})
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})