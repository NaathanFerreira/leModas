import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/Home/Home.jsx'
import Clientes from '../components/Clientes/Clientes'

export default props =>
    <Switch>
        <Route exact path = '/home' component={Home} />
        <Route path = '/clientes' component={Clientes} />
        <Redirect from='*' to='/home' />
    </Switch>