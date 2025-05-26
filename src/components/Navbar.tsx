import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {

  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <Link to="/" >Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  )
}

export default Navbar
