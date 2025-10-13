import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-genz-step-removebg-preview.png'

const Navbar = () => {
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="GenZ Step" className="logo-image" />
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/malaysia" 
              className={`navbar-link ${location.pathname === '/malaysia' ? 'active' : ''}`}
            >
              Malaysia
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/australia" 
              className={`navbar-link ${location.pathname === '/australia' ? 'active' : ''}`}
            >
              Australia
            </Link>
          </li>
        </ul>
        <div className="navbar-spacer"></div>
      </div>
    </nav>
  )
}

export default Navbar