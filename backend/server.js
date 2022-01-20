import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/productRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) =>{
    res.send('Api Running...')
})

app.use('/api/products', router)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} ${PORT}`))