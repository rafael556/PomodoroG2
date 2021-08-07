import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

import '../styles/Cadastro.css'

const Cadastro = () => {
  const [userCad, setUserCad] = useState('')
  const [passwordCad, setPasswordCad] = useState('')
  const [passwordConfCad, setPasswordConfCad] = useState('')

  function handleUserChange(e) {
    setUserCad(e.target.value)
    console.log(userCad)
  }

  function handlePasswordChange(e) {
    setPasswordCad(e.target.value)
  }

  function handlePasswordConfChange(e) {
    setPasswordConfCad(e.target.value)
  }

  if (passwordCad === passwordConfCad) {
    //tem q por on onchange para liberar o cadastro
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(userCad)
    console.log(passwordCad)
    console.log(passwordConfCad)

    if (passwordCad === passwordConfCad) {
      try {
        await api.post('/cadastro', {
          name: userCad,
          password: passwordCad
        })
      } catch (er) {
        console.log('fail')
      }
    } else {
      alert('Senhas incompatíveis')
    }

    setUserCad('')
    setPasswordCad('')
    setPasswordConfCad('')
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
            // name="cadastroUser"
            required
            id="cadastroUser"
            onChange={handleUserChange}
          ></input>
        </div>

        <div>
          <h2>Senha</h2>
          <input
            type="password"
            placeholder="Insira uma senha..."
            // name="cadastroPassword"
            id="cadastroPassword"
            required
            onChange={handlePasswordChange}
          ></input>
        </div>

        <div>
          <h2>Confirme sua senha</h2>
          <input
            type="password"
            // name="cadastroPasswordCheck"
            id="cadastroPasswordCheck"
            required
            onChange={handlePasswordConfChange}
          ></input>
        </div>

        <div>
          <button class="enter" type="submit" onClick={handleSubmit}>
            Cadastrar
          </button>
        </div>
      </form>

      <div>
        <h3>Já possui conta?</h3>

        <Link to="/login">
          <button class="cadlogin">Login</button>
        </Link>
      </div>

      <div class="erro">
        <h4>Oops x-x</h4>
        <h5>Ocorreu um erro,</h5>
        <h5>tente novamente</h5>
      </div>
    </div>
    //adicionar form no button login
  )
}

export default Cadastro
