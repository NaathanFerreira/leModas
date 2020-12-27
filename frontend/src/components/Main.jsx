import React, {Fragment} from 'react'
import './Main.css'
import Header from './Header'

export default props => 
    <Fragment>
        <Header icon="users" titulo="Clientes" subtitulo="Lista de clientes"/>
        <main className="content">
            Content
        </main>
    </Fragment>