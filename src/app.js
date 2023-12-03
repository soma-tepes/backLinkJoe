const express = require("express");
const cors = require("cors");
const http = require("http");
const router = require("./routes/routegeneric.route");
const routerTitle = require("./routes/title.route");
const routerArtitle = require("./routes/artitle.route");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);

const fs = require('fs');
/* const ruta = '/Bartender/DlData_Box.dat'
console.log(ruta) */
app.use(cors());
app.use(express.json());


const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Reemplaza con la URL de tu frontend
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

app.get('/api/v1/url/search/obtenerDatos', (req, res) => {
  try {
    const ruta = '/Bartender/DlData_Box.dat';
    const contenido = fs.readFileSync(ruta, 'utf-8');
    const lineas = contenido.split('\n');

    res.json({ datos: lineas });
    io.emit('actualizarDatos', { datos: lineas });
  } catch (error) {
    console.error('Error al leer el archivo:', error.message);
    res.status(500).json({ error: 'Error al leer el archivo' });
  }
});

// Configuración de eventos de Socket.io
io.on("connection", (socket) => {
  console.log("Cliente conectado");

  // Puedes agregar lógica adicional para enviar datos al cliente al conectarse

  // Manejar desconexiones
  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

// Rutas adicionales
app.use("/api/v1/url/search", router);
app.use("/api/v1/url/search", routerTitle);
app.use("/api/v1/url/search", routerArtitle);

// Iniciar el servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor Socket.io escuchando en el puerto ${PORT}`);
  console.log(`Servidor Socket.io escuchando en el puerto ${PORT}`);
});