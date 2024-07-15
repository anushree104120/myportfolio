const express = require('express')
const cors = require('cors')
const dotenv=require('dotenv')


dotenv.config()

const app=express()
//middlewares
app.use(cors())
app.use(express.json())

app.use("/api/v1/portfolio",require("./routes/portfolio"))
//port
const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server running`);
})

