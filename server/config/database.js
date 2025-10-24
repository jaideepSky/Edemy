import mongoose from 'mongoose'

const connectDB = async ()=>{

  await  mongoose.connect(`${process.env.DB_URL}/edemy`)
  .then(()=>{
     console.log("MongoDB Connected !!")
  })
  .catch((error)=>{
   console.log("Error occur to connect to MongoDB !!",error)
  })


}

export  {connectDB}