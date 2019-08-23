const express = require('express');
require('dotenv').config();

const massive = require('massive');
const productCTRL = require('./controller')
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(cors())

const {
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('database connected')
})

app.get('/api/inventory', productCTRL.getProduct)

app.listen(8080, ()=> {
    console.log('Server is running!')
})