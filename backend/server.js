require('dotenv').config()

// require express package

const express =require('express')

// express app crated
const app = express()

//MIDDLEWARE
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app"})
})

// Listen for requests
app.listen(process.env.PORT, () =>{
    console.log('listenting on port',process.env.PORT)
})


