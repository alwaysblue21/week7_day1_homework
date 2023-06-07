const express = require("express")

const app = express()
//// yuna showed her codes in slack help channel, to study and understand each line, im going to use pseudocode///
app.get("/", (req, res) => {
    // <a href=""></a> makes a link to let clients to click. im going to remove "start over because hw didnt tell us to do it yet"
    res.send(`<h1>99 bottles of beer on the wall</h1>
    <a href="/98"> take one down, pass it around</a>`)
})


// setting bottles to a number value from string(by req.params.number_of_bottles) and used if function to subtract 1 bottles for each click. when the bottle numbers = 0, <a href>start over</a> to start over from 99 again 
app.get("/:number_of_bottles", (req, res) => {
    let bottles = Number(req.params.number_of_bottles)
    if (bottles > 0) {
        res.send(
            `<h1>${bottles} Bottles of beer on the wall.</h1><
            <a href="${bottles - 1}">take on down, pass it around</a>`)
    }   else {
        res.send(`<h1>No more bottles of the beer on the wall</h1><br>
        <a href="/">StartOver</a>`)
    }
})

//////////////////////////////////
app.listen(3000, () => {
    console.log("Listening on port 3000")
})