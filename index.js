require("dotenv").config()

const express = require('express')
const mongoose = require('mongoose') 
const productRoute = require('./routes/product.route.js')

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send("Hello World")
})

// Connect Datatbase
mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    console.log("Connected to Database")
    app.listen(3000, () => {
        console.log("Server is running on localhost:3000")
    })
})
.catch((err) => {
    console.error(`Connection Failed: ${err}`)
})