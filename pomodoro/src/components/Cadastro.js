import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../services/api'

import '../styles/Cadastro.css'

const Cadastro = () => {
  const [userCad, setUserCad] = useState('')
  const [passwordCad, setPasswordCad] = useState('')
  const [passwordConfCad, setPasswordConfCad] = useState('')
  const [buttonAuth, setButtonAuth] = useState(false)
  const [formError, setFormError] = useState(false)
  let history = useHistory()

  function handleUserChange(e) {
    setUserCad(e.target.value)
  }

  function handlePasswordChange(e) {
    setPasswordCad(e.target.value)
  }

  function handlePasswordConfChange(e) {
    setPasswordConfCad(e.target.value)
  }

  //magia negra, não toque
  useEffect(() => {
    const handleForm = () => {
      if (userCad !== '' && passwordCad !== '' && passwordConfCad !== '') {
        if (passwordCad === passwordConfCad) {
          setButtonAuth(true)
        }
      } else if (
        userCad === '' ||
        passwordCad === '' ||
        passwordConfCad === ''
      ) {
        setButtonAuth(false)
      }
      console.log(userCad)
      console.log(passwordCad)
      console.log(passwordConfCad)
    }
    handleForm()
  }, [userCad, passwordCad, passwordConfCad])

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await api
        .post('/cadastro', {
          name: userCad,
          password: passwordCad
        })
        .then(response => {
          const {
            data: { token }
          } = response
          //coloca o token no localStorage da aplicação
          localStorage.setItem('token', JSON.stringify(token))
          //determina que todas as rotas em diante terão o token no header para autorização
          api.defaults.headers.Authorization = `Bearer ${token}`

          setFormError(false)
          setPasswordCad('')
          setPasswordConfCad('')
          setUserCad('')
          history.push('/tarefas')
        })
    } catch (er) {
      console.log('Usuário ou senha incompatível')
      setFormError(true)
    }
  }

  return (
    //parte de cadastro
    <div className="cadastro">
      <form className="cadastro">
        <div>
          <h1>Cadastro</h1>
        </div>

        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Insira um login..."
            required
            value={userCad}
            id="cadastroUser"
            onChange={handleUserChange}
          ></input>
        </div>

        <div>
          <h2>Senha</h2>
          <input
            type="password"
            placeholder="Insira uma senha..."
            id="cadastroPassword"
            value={passwordCad}
            required
            onChange={handlePasswordChange}
          ></input>
        </div>

        <div>
          <h2>Confirme sua senha</h2>
          <input
            type="password"
            id="cadastroPasswordCheck"
            value={passwordConfCad}
            required
            onChange={handlePasswordConfChange}
          ></input>
        </div>

        <div>
          <button
            className={`${buttonAuth ? ' enter' : ' disabled'}`}
            type="submit"
            onClick={handleSubmit}
            disabled={!buttonAuth}
          >
            Cadastrar
          </button>
        </div>
      </form>

      <div>
        <h3>Já possui conta?</h3>

        <Link to="/">
          <button className="cadlogin">Login</button>
        </Link>
      </div>

      <div className={`${formError ? 'comErro' : 'semErro'}`}>
        <h4>Oops x-x</h4>
        <h5>Ocorreu um erro,</h5>
        <h5>tente novamente</h5>
      </div>
    </div>
    //adicionar form no button login
  )
}

export default Cadastro
