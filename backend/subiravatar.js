const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

const port = 3002

app.post('/subitepls', upload.single('avatar'), function (req, res, next) {
    console.log(req.body)
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })