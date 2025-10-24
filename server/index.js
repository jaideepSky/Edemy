import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({
    path : './.env'
})
const port  = process.env.PORT || 4000
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials : true}));

app.get('/', (req,res)=>{
    res.send("Welcome to Edemy!")
})

app.listen(port , ()=>{
    console.log(`Server is listen at ${port} port!`)
})