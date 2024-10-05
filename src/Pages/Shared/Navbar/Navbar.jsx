import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar fixed max-w-6xl mx-auto">
        <div className="logo">84Code</div>
        <ul className="nav-links ">
            <NavLink to="/"><li><a href="#">Home</a></li></NavLink>
            <NavLink to="/services"><li><a id="serviceModelButton" href="#">Services</a></li></NavLink>
            <NavLink to="/about"><li><a id="openUsModal" href="#">About-Us</a></li></NavLink>
            <NavLink to="/contact"><li><a href="#">Contact</a></li></NavLink>
        </ul>
        
    </nav>
    );
};

export default Navbar;