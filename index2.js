const express = require('express')

const app = express()

app.get("/",(req, res) => {
    res.send("Hola")
    
})

app.listen(8070,()=> {
    console.log("Servidor fucionando")
})