require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
import React from 'react';
import {emaillogin, userlogin} from './login.jsx'
import {userjlogin} from './login.jsx'
import {passwordlogin} from './login.jsx'
import { emailsignup } from './signup.jsx';
import { usersignup } from './signup.jsx';
import { passwordsignup } from './signup.jsx';


const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect()

//Registro
const chequearusuario = "SELECT nombreusuario FROM usuarios WHERE nombreusuario = " + usersignup + "'";
const chequearemail = "SELECT email FROM usuarios WHERE nombreusuario = " + emailsignup + "'";
connection.query(chequearusuario, function(error, results, fields){
  if (error) throw error;
  if(results.length < 0)
  {
    connection.query(chequearemail, function(error, results, fields){
      if (error) throw error;
      if(results.length < 0){
        const crearusuario = "INSERT INTO usuarios (nombreusuario, contrasena, email) VALUES ('" + usersignup + "', '" + passwordsignup + "', '" + emailsignup + "')";
        connection.query(crearusuario)
      }
      else{
        console.log("El email ya esta en uso")
      }
    })
  }
  else{
    console.log("El nombre de usuario ya esta en uso")
  }
})





//if (connection.query(chequearusuario)){
  //console.log("Este nombre de usuario ya existe");
//}
//else if (connection.query(chequearemail)){
  //console.log("Este email ya esta en uso");
//}
//else{
//const crearusuario = "INSERT INTO usuarios (nombreusuario, contrasena, email) VALUES ('" + userjs + "', '" + passwordjs + "', '" + emailjs + "')";
//connection.query(crearusuario)
//console.log("Usuario creado");
//}

//Iniciar sesion
const buscarusuario = "SELECT contrasena FROM usuarios WHERE nombreusuario = '" + userlogin + "'";
connection.query(buscarusuario, function (error, results, fields) {
  if (error) throw error;
  if (results.length > 0 && results[0].contrasena === contrasena) {
    console.log("Sesión iniciada");
  } else {
    console.log("Contraseña incorrecta");
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
