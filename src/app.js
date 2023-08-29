const express = require('express')
const cors = require('cors');


const router = require('./routes/routegeneric.route')
const routerTitle = require('./routes/title.route')
const app = express()
app.use(cors());

app.use(express.json())

app.use('/api/v1/url/search', router)
app.use('/api/v1/url/search', routerTitle)
module.exports = app