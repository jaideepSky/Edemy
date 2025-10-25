import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/database.js'
import clerkWebhooks from './controllers/webhooks.js'

dotenv.config({
    path : './.env'
})
const port  = process.env.PORT || 4000

//Initialise Express
const app = express()

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials : true}));

// Routes
app.get('/', (req,res)=>{
    res.send("Welcome to Edemy!")
})

app.post('/clerk', express.json(),clerkWebhooks)

// Connect to DataBase !! 
 connectDB()

app.listen(port , ()=>{
    console.log(`Server is listen at ${port} port!`)
})