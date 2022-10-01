require('dotenv').config()

// require express package

const express =require('express')

// express app crated
const app = express()


//routes
app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app"})
})

// Listen for requests
app.listen(process.env.PORT, () =>{
    console.log('listenting on port',process.env.PORT)
})


