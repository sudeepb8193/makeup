import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'
import Contact from './Components/ContactPage/Contact'
import Portfolio from './Components/PortfolioPage/Portfolio'
import ViewMore from './Components/viewmorePage/ViewMore'
import About from './Components/AboutPage/About'
import Service from './Components/ServicePage/Service'



const App = () => {
  return (
    <>
    <Navbar/>
   <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<About/>} path='/about'/>
    <Route element={<Portfolio/>} path='/portfolio'/>
    <Route element={<Service/>} path='/service'/>
    <Route element={<Contact/>} path='/contact'/>
    <Route element={<ViewMore/>} path='/viewmore/:id'/>
   </Routes>
   </>
  )
}

export default App
