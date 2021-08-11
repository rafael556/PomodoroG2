import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../services/api'

import '../styles/Login.css'

const Login = () => {
  const [userLogin, setUserLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [buttonAuth, setButtonAuth] = useState(false)
  const [formError, setFormError] = useState(false)
  let history = useHistory()

  // consertar os handlers que não estão apagando o valor
  const handleUserChange = e => {
    setUserLogin(e.target.value)
  }
  const handlePasswordChange = e => {
    setPasswordLogin(e.target.value)
  }

  //magia negra, não toque
  useEffect(() => {
    const handleValueChange = () => {
      if (userLogin !== '' && passwordLogin !== '') setButtonAuth(true)
      else if (userLogin !== '' || passwordLogin !== '') setButtonAuth(false)
    }
    handleValueChange()
  }, [userLogin, passwordLogin])

  //processamento do botão para habilitar ou desabilitar o estilo
  const buttonEnter = (
    <button
      className={` ${buttonAuth ? ' enter' : ' disabled'}`}
      disabled={!buttonAuth}
      type="submit"
    >
      Entrar
    </button>
  )

  async function handleSubmit(e) {
    await e.preventDefault()

    try {
      await api
        .post('/login', {
          name: userLogin,
          password: passwordLogin
        })
        .then(response => {
          const {
            data: { token }
          } = response

          console.log(response.data.token)

          //coloca o token no localStorage da aplicação
          localStorage.setItem('token', JSON.stringify(token))
          //determina que todas as rotas em diante terão o token no header para autorização
          api.defaults.headers.Authorization = `Bearer ${token}`
          setFormError(false)
          history.push('/tarefas')
        })
    } catch (er) {
      console.log('User not found')
      setFormError(true)
    }
  }
  return (
    //parte de login
    <div className="login">
      <form className="login" onSubmit={handleSubmit}>
        <div>
          <h1>Bem vindo!</h1>
        </div>
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Seu login..."
            id="loginUser"
            onChange={handleUserChange}
          ></input>
        </div>
        <div>
          <h2>Senha</h2>
          <input
            type="password"
            placeholder="Sua senha..."
            id="loginPassword"
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div>{buttonEnter}</div>
      </form>

      <div>
        <h3>Primeira vez aqui?</h3>
        <Link to="/cadastro">
          <button className="cadastrar">Cadastrar</button>
        </Link>
      </div>

      {/* REMOVER ANTES DE ENTREGAR */}
      <Link to="/tarefas">
        <button className="button cadastrar">Botão pra sair daqui</button>
      </Link>

      <div className={`${formError ? 'erroAparece' : 'erroSome'}`}>
        <h4>Oops x-x</h4>
        <h5>Ocorreu um erro,</h5>
        <h5>tente novamente</h5>
      </div>
    </div>
  )
}

export default Login
