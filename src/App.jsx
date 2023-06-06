import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import About from './components/About/about'
import Services from './components/Services/services'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/Git/git'
import Footer from './components/Copyright/copyright'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <About />
      {/* <Services />
      <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
