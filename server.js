require('dotenv').config()
const express = require('express')
const fs = require('fs')
const cors = require("cors");


//config
let routesPath = './api/routes/'

//body

let app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

fs.readdirSync(routesPath).forEach(E => {
  try {
    let route = require(routesPath + E)
    app.use("/", route)
    console.log("[server] Loaded route: " + E)
  }
  catch (error) {
    console.log('[server] Error: ' + error)
  }
})


app.listen(process.env.PORT, console.log('Server listening on port: ' + process.env.PORT))