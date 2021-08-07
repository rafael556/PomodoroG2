import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

import '../styles/Login.css'

const Login = () => {
  const [userLogin, setUserLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  function handleUserChange(e) {
    setUserLogin(`${e.target.value}`)
  }
  function handlePasswordChange(e) {
    setPasswordLogin(`${e.target.value}`)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await api
        .post('/login', {
          username: userLogin,
          password: passwordLogin
        })
        .then(response => console.log(response.data))
    } catch (er) {
      console.log('User not found')
    }

    setUserLogin('')
    setPasswordLogin('')
  }
  return (
    //parte de login
    <div class="login">
      <form class="login" onSubmit={handleSubmit}>
        <div>
          <h1>Bem vindo!</h1>
        </div>
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Seu login..."
            name="loginUser"
            id="loginUser"
            onChange={handleUserChange}
          ></input>
        </div>
        <div>
          <h2>Senha</h2>
          <input
            type="password"
            placeholder="Sua senha..."
            name="loginPassword"
            id="loginPassword"
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div>
          <button class="enter" type="submit">
            Entrar
          </button>
        </div>
      </form>

      <div>
        <h3>Primeira vez aqui?</h3>
        <Link to="/cadastro">
          <button class="cadastrar">Cadastrar</button>
        </Link>
      </div>

      {/* REMOVER ANTES DE ENTREGAR */}
      <Link to="/tarefas">
        <button class="button cadastrar">Botão pra sair daqui</button>
      </Link>

      <div class="erro">
        <h4>Oops x-x</h4>
        <h5>Ocorreu um erro,</h5>
        <h5>tente novamente</h5>
      </div>
    </div>
  )
}

export default Login
