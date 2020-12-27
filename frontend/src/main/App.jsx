import React from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/Logo'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default props => 
    <div className="app">
        <Logo />
        <Header />
        <Nav />
        <Main />
        <Footer />
    </div>