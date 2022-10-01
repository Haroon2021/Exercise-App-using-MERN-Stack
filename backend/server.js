// require express package

const express =require('express')

// express app crated
const app = express()

// Listen for requests
app.listen(4000, () =>{
    console.log('listenting on port 4000')
})
