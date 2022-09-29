const express = require('express')
const mongoose = require ('mongoose')
require ('dotenv').config()
const UserRouter = require('./Routes/userRouter')
const PostRouter = require('./Routes/PostRouter')



const app = express()
app.use(express.json())
app.use('/api/users', UserRouter)
app.use('/api/posts', PostRouter)



mongoose.connect(process.env.URI, err=>err? console.log(err): console.log("the DB is connected"))

const Port = process.env.PORT
if (Port == null || Port == ""){
    Port =5000;
} 

app.listen(Port, err => err? console.log(err): console.log(`the server is runnig on ${Port}`))



