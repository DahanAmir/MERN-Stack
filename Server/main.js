const express = require('express')
const studentRouter = require('./routers/studentRouter')
const cors = require('cors')

let app = express();
app.use(express.json())
app.use(cors())

require('./configs/database');

app.use('/api/students' , studentRouter)

app.listen(8000)