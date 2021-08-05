import express, { Router } from 'express'
const userController = require('./controllers/userController')
const taskController = require('./controllers/taskController')
const authMiddleware = require('./middlewares/auth')

//router do express para exportação 
const routes = express.Router()

//lista todos os usuários
routes.get('/teste', userController.teste)

//pega os dados enviados dos formulários de cadastro e registra no banco
routes.post('/cadastro', userController.register)

routes.use(authMiddleware)

//autenticação do login
routes.post('/login', userController.authenticate)

//faz update dos valores padrões do modal
routes.put('/modal/:id', userController.updateUser)

//listar todas
routes.get('/tarefas', taskController.listTask)

//criar tarefa
routes.post('/tarefas', taskController.createTask)

//modifica o estado da tarefa
routes.put('/tarefas/:id', taskController.updateTask)

//deletar tarefa
routes.delete('/tarefas/:id',taskController.deleteTask)

export default routes