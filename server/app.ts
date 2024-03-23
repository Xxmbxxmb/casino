import express from "express";
import http from "http";
import { Server } from "socket.io";
import routes from "./routes";

const app = express();
const server = http.createServer(app)
const io = new Server(server)

app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api", routes)

// const usuariosConectados: string[] = [];

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('Un cliente se ha conectado');

//   // Cuando un cliente se conecta, puedes asignarle un ID único
//   const usuarioId = socket.id;
//   console.log(usuarioId)

//   // Puedes agregar el usuario a la lista de usuarios conectados
//   usuariosConectados.push(usuarioId);

//   // Puedes enviar un mensaje personalizado al usuario conectado
//   socket.emit('chat message', '¡Bienvenido al juego!');

//   // Escucha eventos específicos del usuario
//   socket.on('pedirCarta', (data) => {
//     // Procesa la solicitud del usuario aquí
//     // Asegúrate de emitir eventos específicos para las actualizaciones del juego
//     io.emit('actualizacionDeCarta', { jugadorId: usuarioId, ...data });
//   });

//   socket.on('disconnect', () => {
//     console.log(`El usuario ${usuarioId} se ha desconectado`);
//     // Elimina al usuario desconectado de la lista de usuarios conectados
//     usuariosConectados.splice(usuariosConectados.indexOf(usuarioId), 1);
//   });
// });

server.listen(3001, () => {
  console.log('listening on *:3001');
});