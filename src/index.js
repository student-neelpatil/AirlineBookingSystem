import express from 'express'
import {PORT} from "./config/serverconfig.js"

const serverconnect=async()=>{
   const app=express();

   app.listen(PORT,()=>{
     console.log(`server is running at port: ${PORT}`)
   })
}


serverconnect();