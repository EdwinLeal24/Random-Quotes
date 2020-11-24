const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const datos = require('./datos')
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("<h1>Bienvenidos a Frases api</h1>");
});

console.log(datos.length)

app.get("/citas", (req, res) => {
   let citas = datos[Math.floor(Math.random()*datos.length)]
    res.status(200).json(citas);

});

const port = 8080;
app.listen(port, ()=>console.log("estamos en http://localhost:"+port));