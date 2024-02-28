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

// Connect Datatbase
mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    console.log("Connected to Database")
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on localhost:${process.env.PORT}`)
    })
})
.catch((err) => {
    console.error(`Connection Failed: ${err}`)
})