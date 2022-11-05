
const express = require("express")
const app = express()
//const json = require('./database.json')
const {json}= require('express')
const flight = require('./router/flightRouter')

app.use(json());
app.use('/flight', flight);



const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>

{
    res.send("Zuri training")
  }
)

app.listen(PORT, () => console.log('Serving on port '+PORT)) 


