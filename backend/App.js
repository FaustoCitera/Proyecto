require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3001;

const cors = require("cors");
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect()

app.use(cors());

//Registro
app.post("/signup", (req, res) => {
const {usersignup, emailsignup, passwordsignup} = req.body;
console.log({usersignup, emailsignup, passwordsignup} )
const chequearusuario = "SELECT nombreusuario FROM usuarios WHERE nombreusuario = ?";
const chequearemail = "SELECT email FROM usuarios WHERE email = ?";
connection.query(chequearusuario, [usersignup], function(error, results, fields){
  if (error) throw error;
  if(results.length < 0)
  {
    connection.query(chequearemail, [emailsignup], function(error, results, fields){
      if (error) throw error;
      if(results.length > 0){
        console.log("El email ya esta en uso");
        res.send("El email ya esta en uso");
      }
        
      else{
        const crearusuario = "INSERT INTO usuarios (nombreusuario, contrasena, email) VALUES (?, ?, ?)";
        connection.query(crearusuario, [usersignup, passwordsignup, emailsignup], function(error, results){
          if (error) throw error;
          console.log("Usuario creado");
          res.send("Usuario creado");
      });
  }
  
})
}
else{
  console.log("El nombre de usuario ya esta en uso")
  res.send("El nombre de usuario ya esta en uso");
}
});
});



//Iniciar sesion
app.post("http://localhost:3001/login", (req, res) => {
  const {username, password} = req.body;
const buscarusuario = "SELECT contrasena FROM usuarios WHERE nombreusuario = ?";
connection.query(buscarusuario, [username], function (error, results, fields) {
  if (error) throw error;
  if (results.length > 0 && results[0].contrasena === password) {
    console.log("Sesión iniciada");
  } else {
    console.log("Contraseña incorrecta");
  }
});
});

//Crear cuenta negocio
app.post("http://localhost:3001/usuarioNegociador", (req, res) => {
  const{nombreNegocio, ubicacionNegocio, rubro} = req.body;
  const chequearNegocio = "SELECT nombreNegocio FROM negocios WHERE nombreNegocio = ?";
  connection.query(chequearNegocio, [nombreNegocio], function (error, results, fields){
    if (error) throw error;
    if (results.length > 0){
      console.log("El negocio ya existe");
    }
    else {
      const crearNegocio = "INSERT INTO negocios (nombreNegocio, rubro, ubicacion) VALUES (?, ?, ?)";
      connection.query(crearNegocio, [nombreNegocio, rubro, ubicacionNegocio], function (error, results, fields){
        if (error) throw error;
        else{
          console.log("Negocio creado");
        }
      })
    }
  });
});

//Crear una reseña
app.post("http://localhost:3001/Review", (req, res) => {
  const{negocioResenado, textoResena} = req.body;
  const crearResena = "INSERT INTO resenas (nombreNegocioResenado, textoResena) VALUES (?, ?)";
  connection.query(crearResena, [negocioResenado, textoResena], function (error, results, fields){
    if (error) throw error;
    else{
      console.log("Reseña subida");
    }
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


