import React from 'react'
import './Logo.css'
import Logo from '../assets/imgs/logo.png'
import {Link} from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/home">
            <img src={Logo} alt=""/>
        </Link>
    </aside>