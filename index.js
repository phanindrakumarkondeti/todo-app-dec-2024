const express = require('express');

const app = express();
const PORT = 8000;
//ejs engine
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send("welcome to TODO-APP")
})
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})