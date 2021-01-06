import React from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 


import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Routes from './Routes'
import Footer from '../components/Footer'

export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>