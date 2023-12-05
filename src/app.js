const express = require("express");
const cors = require("cors");
const http = require("http");
const fs = require('fs');
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const router = require("./routes/routegeneric.route");
const routerTitle = require("./routes/title.route");
const routerArtitle = require("./routes/artitle.route");
app.use(cors());
app.use(express.json());

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Reemplaza con la URL de tu frontend
    methods: ["GET", "POST"],
    credentials: true,
  }
});


const path = require('path');
const ruta = path.join(__dirname, 'blocNotas', 'notepad.dat');
io.on("connection", (socket) => {
  console.log("Cliente conectado");
  enviarDatosAlCliente(socket);
  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

function enviarDatosAlCliente(socket) {
  fs.readFile(ruta, 'utf-8', (error, contenido) => {
    if (error) {
      console.error('Error al leer el archivo:', error.message);
    } else {
      const lineas = contenido.split('\n');
      socket.emit('actualizarDatos', { datos: lineas });
     
    }
  });
}


fs.watch(ruta, (evento) => {
  if (evento === 'change') {
    console.log('Se detectaron cambios en el archivo. Actualizando clientes...');
    // Enviar datos actualizados a todos los clientes
    fs.readFile(ruta, 'utf-8', (error, contenido) => {
      if (!error) {
        const lineas = contenido.split('\n');
        io.sockets.emit('actualizarDatos', { datos: lineas });
      }
    });
  }
});
app.use("/api/v1/url/search", router);
app.use("/api/v1/url/search", routerTitle);
app.use("/api/v1/url/search", routerArtitle);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor Socket.io escuchando en el puerto ${PORT}`);
});
