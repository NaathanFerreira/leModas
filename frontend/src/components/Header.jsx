import React from 'react'
import './Header.css'

export default props => 
    <header className="header">
        <h1>
            <i className={`fa fa-${props.icon}`}></i> {props.titulo}
        </h1>
        <p className="lead text-muted">
            {props.subtitulo}
        </p>
    </header>