require('dotenv').config()

// require express package

const express =require('express')
const workoutRoutes = require('/routes/workouts')

// express app crated
const app = express()

//MIDDLEWARE
//the line below allows you to dealwith data being sent form the client eg from a post or update request
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/workouts',workoutRoutes)

// Listen for requests
app.listen(process.env.PORT, () =>{
    console.log('listenting on port',process.env.PORT)
})


