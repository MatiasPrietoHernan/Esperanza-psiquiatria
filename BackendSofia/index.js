import express from 'express'
import cors from 'cors'
import router from './rutas/rutas.js'
import dotenv from 'dotenv';

//middlewares
dotenv.config()

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())


app.use('/api', router)

app.listen(port, ()=>{
    console.log(`server on port http://localhost:${port}`)
})