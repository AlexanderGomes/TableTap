require("dotenv").config()
const express = require("express")
const port = process.env.PORT || 5000
const app = express()

app.use(express.json({ limit: '1mb'}));
app.use(express.urlencoded({ extended: true, limit: '1mb'}));



app.listen(port, async () => {
console.log(`server running on port ${port}`)
})