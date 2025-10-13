import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Malaysia from './components/Malaysia'
import Australia from './components/Australia'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time to ensure all components are ready
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // 2.5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/malaysia" element={<Malaysia />} />
            <Route path="/australia" element={<Australia />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
