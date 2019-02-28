const express = require('express')
const { mongoose } = require('./config/database')
const { contactsRouter  } = require('./app/controllers/ContactsController')
const port = process.env.PORT || 3005
const app = express() 

app.use(express.json())

app.use('/contacts', contactsRouter)

app.listen(port, function(){
    console.log('listening on port', port)
})