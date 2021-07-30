import React from 'react'
import api from '../services/api';

import '../styles/Login.css';

const Login = () => {

    const [userLogin, setUserLogin] = React.useState("");
    const [passwordLogin, setPasswordLogin] = React.useState("");

    function handleUserChange(e) {
        setUserLogin(`${e.target.value}`)
    }
    function handlePasswordChange(e) {
        setPasswordLogin(`${e.target.value}`);
        
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await api.post('login', {

                username: userLogin,
                password: passwordLogin

            });
        } catch (er) {
            console.log("User not found");
        }

        setUserLogin('');
        setPasswordLogin('');

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
                    <input type="text" placeholder="Seu login..." name="loginUser" id="loginUser" onChange={handleUserChange}></input>
                </div>
                <div>
                    <h2>Senha</h2>
                    <input type="password" placeholder="Sua senha..." name="loginPassword" id="loginPassword" onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button class="button enter" type="submit" >Entrar</button>
                </div>
            </form>
            
            <div className="firstAcess">
                    <h3>Primeira vez aqui?</h3>
                    <a href="/cadastro">
                        <button class="button cadastrar">Cadastrar</button>
                    </a>
                </div>

        </div>

    );
}

export default Login;