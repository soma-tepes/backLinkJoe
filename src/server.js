require('dotenv').config();
const app = require('./app')
const { db }  = require('./database/config')



db.authenticate()
.then(()=>{console.log("database sucess!")})
.catch(()=>{console.log("error db")})
db.sync()
.then(()=>{console.log("database sucess!")})
.catch(()=>{console.log("error db syncro")})

app.listen(process.env.PORT_CONECTION,()=>{
    console.log(`Server running PORT ${process.env.PORT_CONECTION}`)
 
})