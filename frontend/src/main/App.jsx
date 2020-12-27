import React from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from 'react-router-dom'

import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default props => 
    <BrowserRouter>
        <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
        </div>
    </BrowserRouter>