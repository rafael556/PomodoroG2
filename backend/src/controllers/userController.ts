import bcrypt from 'bcryptjs'
import User from '../models/User';
import jwt from 'jsonwebtoken'
const authConfig = require('../config/auth')

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, { expiresIn: 86400 })
}

//pega os dados enviados dos formulários de cadastro e registra no banco
exports.register = async (req, res) => {
  try {
    //verifica se o usuário já existe
    const { name } = req.body
    console.log(req.body)
    if (await User.findOne({ name })) {
      console.log('usuario já existe')
      return res.status(400).send({ error: "Usuario ja existe" })
    }

    //cria no banco o usuário com os dados básicos
    const user = await User.create(req.body)

    //impede a senha de ser retornada
    user.password = undefined
    console.log(user)

    res.send({
      user,
      token: generateToken({ id: user.id })
    })

  } catch (err) {
    return res.status(400).send({ error: "Registration Failed" })
  }
}

//autenticação do login
exports.authenticate = async (req, res) => {
  //desestructuring
  const { name, password } = req.body

  //encontra no banco o usuário
  const user = await User.findOne({ name }).select('+password')

  //verifica se o usuário existe
  if (!user) {
    console.log('User not found')
    return res.status(400).send({ error: "User not found" })
  }

  //verifica se a senha corresponde com a password do req.body com a do banco user.password
  if (!await bcrypt.compare(password, user.password)) {
    console.log('invalid password')
    return res.status(400).send({ error: "invalid password" })
  }

  user.password = undefined

  res.send({
    user,
    token: generateToken({ id: user.id })
  })
}

//lista todos os usuários
exports.teste = async (req, res) => {
  const user = await User.find({})
  res.json(user)
}

exports.updateUser = async (req, res) => {
  try {
    console.log(req.userId)
    const user = await User.findByIdAndUpdate(req.userId, req.body)
    return res.json(user)
  } catch (err) {
    return res.status(400).send({ error: 'failed to update user' })
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
    console.log(user)
    return res.json(user)
  } catch (err) {
    return res.status(400).send({ error: 'failed' })
  }
  // return user
}