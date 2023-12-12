const express = require('express')
const cors = require("cors")
const mysql = require('mysql2')
require('dotenv').config();
const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads')
  },
  filename: function (req, file, cb){
    cb(file.fieldname)
  }
})
const upload = multer({ storage: storage })

const app = express()

const port = 3001

const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect()
app.use(express.json());
app.use(cors());
var sesionActual

app.post('/signup', (req, res) => {
  console.log(req.body)
  const {username, password, email} = req.body
  const chequearemail = "SELECT email FROM usuarios WHERE email = '" + email + "'"
  connection.query(chequearemail, function(error, results, fields){
    if (error) throw error
    
    if (results.length > 0)
    {
      console.log(results)
      res.status(400).send("El email ya esta en uso")
      console.log("email en uso")
    }
    else
    {
      const chequearusuario = "SELECT nombreusuario FROM usuarios WHERE nombreusuario = '"+ username +"'"
      connection.query(chequearusuario, function(error, results, fields){
        if (error) throw error
        
        if (results.length > 0)
        {
          res.status(400).send("El nombre de usuario ya esta en uso")
          console.log("nombre de usuario en uso")
        }
        else
        {
          const usuario = "INSERT INTO usuarios (nombreusuario, contrasena, email) VALUES ('" + username + "', '" + password +"', '" +email + "')"
          connection.query(usuario, function(error, results, fields){
            if (error) throw error
            else{
              sesionActual = username
              console.log("usuario creado")
              res.send("usuario creado")
            }
          })
        }
      })
    }
  })
  
})

app.post('/login', (req, res) =>{
  console.log(req.body)
  const {username, password} = req.body
  const iniciar = "SELECT contrasena FROM usuarios WHERE nombreusuario = '" + username + "'"
  connection.query(iniciar, function(error, results, fields){
    if (error) throw error
    console.log(results)
    if (results[0].contrasena == password)
    {
      sesionActual = username
      res.send("La contraseña es correcta, sesion iniciada")
      console.log("Sesion iniciada")
    }

    else{
      res.status(400).send("La contraseña es incorrecta")
      console.log("Sesion iniciada mallllll")
    }
  })
})

app.post('/business', upload.single('img'), (req, res) => {
  //Crear negocio
  console.log(req.body, req.file)
  const {name, location, owner, productOrService} = req.body
  const img = req.file
  const chequearNombre = "SELECT nombreNegocio FROM negocios WHERE nombreNegocio = '" + name + "'"
  connection.query(chequearNombre, function(error, results, fields){
    console.log(results)
    if (error) throw error
    
    if(results.length > 0)
    {
      res.status(400).send("Ya existe un negocio con este nombre")
      console.log("Ya existe un negocio con este nombre")
    }

    else 
    {
      const crearNegocio = "INSERT INTO negocios (nombreNegocio, rubro, imagen, ubicacion, owner) VALUES ('" + name + "', '" + productOrService + "', '" + img + "', '" + location + "', '" + owner + "')"
      connection.query(crearNegocio, function(error, results, fields){
        if (error) throw error
        else 
        {
          res.send("Negocio creado")
          console.log("Negocio creado")
        }
      })
    }
  })
})

app.post('/config', (req, res) => {
  //Cambiar datos de usuario
  console.log(req.body)
  const {username, password} = req.body
  const chequearusuario = "SELECT nombreusuario FROM usuarios WHERE nombreusuario = '"+ username +"'"
  connection.query(chequearusuario, function(error, results, fields){
    if (error) throw error
    
    if (results.length > 0)
    {
      res.status(400).send("El nombre de usuario ya esta en uso")
      console.log("nombre de usuario en uso")
    }
    else
    {
      const cambiarDatos = "UPDATE usuarios SET nombreusuario = " + username + ", contrasena = " + password + " WHERE nombreusuario = '" + sesionActual + "'"
      connection.query(cambiarDatos, function(error, results, fields){
        if (error) throw error

        else 
        {
          res.send("Datos del usuario actualizados")
          console.log("Datos del usuario actualizados")
        }
      })
    }
  })

  
})

app.get('/busqueda', (req, res) => {
  //Busca todos los nombres de negocios
  const buscar = "SELECT nombreNegocio FROM negocios"
  connection.query(buscar, function(error, results, fields){
    if (error) throw error
    else
    {
      console.log(results)
      res.send(results)
    }
  })
})

//app.get('/???????????', (req, res) => {
  //Muestra todos los datos de un solo negocio
//})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })