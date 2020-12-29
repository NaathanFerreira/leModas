import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/clientes">
                <i className="fa fa-users"></i> Clientes
            </Link>
        </nav>
    </aside>