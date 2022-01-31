import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Api Running...')
})

app.use('/api/products', router)
app.use('/api/users', userRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} ${PORT}`))