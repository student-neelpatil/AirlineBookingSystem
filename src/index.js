const express=require('express');
const {PORT}=require('../src/config/config.json')

const serverconnect=async()=>{
   const app=express();

   app.listen(PORT,()=>{
     console.log(`server is running at port: ${PORT}`)
   })
}


serverconnect();