import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home"
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Book from './components/Book/Book';
import Blog from './components/Blog/Blog';
import Testimonail from './components/Testimonail/Testimonail';
import { AuthContextProvider } from './context/UserAuthContext';




const App = () => {
  return (
    <>
      <Navbar/>
      <AuthContextProvider>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/gallery" exact element={<Gallery/>}/>
            <Route path="/book" exact element={<Book/>}/>
            <Route path="/blog" exact element={<Blog/>}/>
            <Route path="/testimonail" exact element={<Testimonail/>}/>
            <Route path="/contact" exact element={<Contact/>}/>
            <Route path="/sign-in" exact element={<Login/>}/>
            <Route path="/register" exact element={<Register/>}/>
          </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
