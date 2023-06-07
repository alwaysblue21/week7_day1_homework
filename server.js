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
/////////////////////////////////////
///////Magic 8 Ball/////////////////

app.get("/magic/:id", (req, res) => {
    const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const random = Math.floor(Math.random() * arr.length)
    res.send(`<h1>${arr[random]}</h1>`)
})


/////////////////////////////////
app.listen(3000, () => {
    console.log("Listening on port 3000")
})