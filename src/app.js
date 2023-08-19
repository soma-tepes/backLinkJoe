const express = require('express')
const cors = require('cors');


const router = require('./routes/routegeneric.route')
const app = express()
app.use(cors());

app.use(express.json())

app.use('/api/v1/url/search', router)

module.exports = app