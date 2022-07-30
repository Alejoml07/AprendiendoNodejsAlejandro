const express = require('express')

const app = express()

app.get("/",(req, res) => {
    res.send("Hola")
    
})

app.listen(8060,()=> {
    console.log("Servidor fucionando")
})