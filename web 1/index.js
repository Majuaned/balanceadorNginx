const express = require('express');

const app = express();

const puerto = 80;

app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en el puerto ${puerto}`)
})

app.get('/', (req, res) => {
  res.send(`<h1>Servidor EXPRESS desde el Contenedor 1</h1>`);
});
  

