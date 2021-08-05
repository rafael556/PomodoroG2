import React from 'react'
import {Link} from 'react-router-dom'
import api from '../services/api';

import '../styles/Cadastro.css';

const Cadastro = () => {

    const [userCad, setUserCad] = React.useState("");
    const [passwordCad, setPasswordCad] = React.useState("");
    const [passwordConfCad, setPasswordConfCad] = React.useState("");

    function handleUserChange(e) {
        setUserCad(`${e.target.value}`)
    }

    function handlePasswordChange(e) {
        setPasswordCad(`${e.target.value}`)
    }

    function handlePasswordConfChange(e) {
        setPasswordConfCad(`${e.target.value}`);
    }

    if(passwordCad === passwordConfCad){
        //tem q por on onchange para liberar o cadastro
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await api.post('login', {

                username: userCad,
                password: passwordCad

            });
        } catch (er) {
            console.log("User not found");
        }

        setUserCad('');
        setPasswordCad('');
        setPasswordConfCad('');

    }

    return (
        //parte de cadastro
        <div className="cadastro">

            <form className="cadastro" onChange={handleSubmit}>
                <div>
                    <h1>Cadastro</h1>
                </div>

                <div>
                    <h2>Login</h2>
                    <input type="text" placeholder="Insira um login..." name="cadastroUser" id="cadastroUser" onChange={handleUserChange}></input>
                </div>

                <div>
                    <h2>Senha</h2>
                    <input type="password" placeholder="Insira uma senha..." name="cadastroPassword" id="cadastroPassword" onChange={handlePasswordChange}></input>
                </div>

                <div>
                    <h2>Confirme sua senha</h2>
                    <input type="password" name="cadastroPasswordCheck" id="cadastroPasswordCheck" onChange={handlePasswordConfChange}></input>
                </div>

                <div>
                    <button class="enter" type="submit" >Cadastrar</button>
                </div>

            </form>

            <div>
                <h3>Já possui conta?</h3>
                
                <Link to="/login">
                        <button class="cadlogin">Login</button>
                </Link>
            </div>

            <div class='erro'>
                <h4>Oops x-x</h4>
                <h5>Ocorreu um erro,</h5>
                <h5>tente novamente</h5>
            </div>

        </div>

        //adicionar form no button login
    );
}

export default Cadastro;