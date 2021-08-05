import { Switch, Route } from 'react-router'
import React from 'react'

import Cadastro from '../pages/PageCadastro'
import Login from '../pages/PageLogin'
import Tarefas from '../pages/Tarefas'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/tarefas" component={Tarefas} />
    </Switch>
  )
}

export default Routes
