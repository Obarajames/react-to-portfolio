import { useState } from 'react'
import {Link , Router , Routes , BrowserRouter} from "react-router-dom"

import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import About from './components/about/about'
import Project from './components/project/project'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Navbar/>
     <Header/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/> 
    </>
  )
}

export default App
