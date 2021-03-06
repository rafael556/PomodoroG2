import express from 'express'
import routes from './routes'
import cors from 'cors'
import mongoose from 'mongoose'

//web socket
const socketio = require("socket.io")
const http = require('http')

//inicializando o express
const app = express()


//web socket
const server = http.Server(app)

const io = socketio (server, {
  cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
})

function webSocket2(req, res, next) {
  req.io = io;
  next();
}

app.use('*', webSocket2)

//transformando os dados de entrada em json
app.use(express.json())

//permissão do cors para a entrada de rotas
app.use(cors({
  origin: '*'
}))

//conexão com o mongo no banco de dados pomodorog2, porém a partir do localhost
mongoose.connect('mongodb://localhost:27017/pomodorog2',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
})
.then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

 //importação das rotas para utilização
app.use(routes)

server.listen(8080)
