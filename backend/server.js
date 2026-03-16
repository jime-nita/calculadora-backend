const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const {errorHandler} = require ('./middleware/errorMiddleware')
const cors = require("cors")

connectDB()

const app = express()

/*app.use(cors({
    origin: "https://miapp.com"
})) */

app.use(cors())

app.use(express.json())
app.use('/api/gastos', require('./routes/gastosRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))

// Cambio para actualizar Render <3