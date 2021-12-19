import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About.jsx'
import ERRORPAGENOTFOUND from '../components/ERROR.jsx'
import Footer from '../components/Footer.jsx'
import HomePage from '../components/Home.jsx'
import Navbar from '../components/Navbar.jsx'
import PropertyApi from '../components/propertyApi.js'

export default function AllPanpges() {
    return (
        <>
        <Navbar />
        <Routes>
        <Route  path="about" element={<About />}/>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/property" element={<PropertyApi />}/>
        <Route  path="*" exact={true} element={<ERRORPAGENOTFOUND />}/>
        </Routes>
        <Footer/>
        
        </>

    )
}
