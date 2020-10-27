const express = require ('express')
const route =require('./routes') 
const cors =require("cors")


const bodyParser=require('body-parser')
require('dotenv').config({path:'variables.env'})
const app =express();


const whitelist=[process.env.FRONTEND_URL]
console.log("la lista blanca")
 console.log(whitelist)
const corsOption={
origin:(origin,callBack)=>
{
    const existe =whitelist.some(dominio=>dominio===origin);
    if(existe)
    {

        callBack(null,true)
    }else{

        callBack(new Error('no permitido por  cors'));
        
    }
}
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.use('/',route())
app.listen(5000)