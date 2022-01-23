const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")

const app = express();
dotenv.config();
connectDB()

app.get("/",(req,res) => 
 res.send('server is running ...')
)

const PORT = process.env.PORT 

app.listen(PORT, console.log(`server is running on port  ${PORT}`))