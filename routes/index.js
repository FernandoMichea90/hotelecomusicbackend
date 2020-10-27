const express =require('express')
const request = require('request');
const router =express.Router();
const nodemailer=require('nodemailer')


const https = require('https');

let url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJP4RT2S7hiZYR6a2RqLMAtoM&key=AIzaSyCE-9odbKyIEJykp0KazN_qtZbFyaNPQtc";

let options = {json: true};

module.exports=function(){

        router.post('/',(req,res)=>{

            const state=req.body
            // paso 1
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user:  'contacto@ecomusichotel.com', // TODO: your gmail account
                    pass:  'bpyelhpxoohhigfs' // TODO: your gmail password
                }
            });

             //paso 2 
                        
            let mailOptions = {
                    from:`${state.correo}` , // TODO: email sender
                    to: 'contacto@ecomusichotel.com', // TODO: email receiver
                    subject: `Contacto Hotel Ecomusic:${state.nombre}`,
                    text: `${state.asunto} `
                    


                };



            //paso 3 
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
            
                    console.log(err);
                    
                    //return err('Error occurs ');
                }else{
                    console.log("correo enviado")
                    res.send("correo enviado")
                }
            
                })
            



        })







 return router
}
