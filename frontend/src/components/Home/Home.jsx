import React from 'react'

import Main from '../Main'

const headerProps = {
    icon: "home",
    titulo: "Página inicial",
    subtitulo: "Aplicação para gerenciamento de clientes"
}

export default props => 
    <Main {...headerProps}>
        <div className="display-4">Bem Vindo !</div>
        <hr/>
        <p className="mb-0">Sistema desenvolvido em ReactJS</p>
    </Main>
