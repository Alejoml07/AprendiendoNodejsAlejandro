const express = require('express')

const app = express()
app.set('view engine','ejs')
const path = require('path');
app.set('views',path.join(__dirname,'/views'))

app.get("/",(req, res) => {
    let usuario = ["alejandro", "muñoz", "dilga"];

    var nombre = "Usuario Alejandro"
    res.render('pages/index',{ 
        hola:nombre, 
        arreglousuarios:usuario
        });

    
})

app.listen(8070,()=> {
    console.log("Servidor fucionando")
})