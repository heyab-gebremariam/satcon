
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'


function App() {
  

  return (
    <BrowserRouter>
      <Header></Header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer></Footer> 

    
  </BrowserRouter>
  )
}

export default App
