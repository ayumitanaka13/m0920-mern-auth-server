require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRoute = require('./routes/user.route')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', userRoute)

const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err) throw err
    console.log('Connectect to Database!')

    app.listen(PORT, () => console.log(`The server has  started on port: ${PORT}`))
})