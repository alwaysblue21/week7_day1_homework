const express = require("express")

const app = express()

////////greetings//////////////////

app.get("/greeting", (req, res) => {
    res.send("Hello, stranger")
})

app.get("/greeting/:name", (req, res) => {
   console.log(req.params)
   res.send(`<h1>Wow! Hello there, ${req.params.name}</h1>`)
})
//////////////////////////////////////////////////////
//////////tip calculator/////////////////////////////

app.get("/tip/:total/:tipPercentage", (req, res) => {
    console.log(req.params.tipPercentage)
    res.send(req.params.tipPercentage)
})


/////////////////////////////////
app.listen(3000, () => {
    console.log("Listening on port 3000")
})