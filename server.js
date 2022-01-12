const express = require("express")
const axios = require("axios")
const e = require("express")
const app = express()
app.use(express.json())


app.get('/getScript', async (request, response) => {
    const key = request.query.key
    if (key == "123") {
        const response1 = await axios.get('https://pastebin.com/raw/gtNMVLqx')

        if (response1) {
            response.send(response1.data)
        } 
    } else {
        response.sendStatus(400)
    }
})

app.listen(3000, () => {
    console.log("running")
})