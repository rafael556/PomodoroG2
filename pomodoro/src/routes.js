  
import { Switch, Route } from "react-router";
import React from "react";

import Cadastro from './pages/PageCadastro';
import Login from './pages/PageLogin';

function Routes()
{
    return(
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
        </Switch>
    );
}

export default Routes;