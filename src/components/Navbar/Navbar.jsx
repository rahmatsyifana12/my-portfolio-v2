import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav id="#nav" className="nav navbar navbar-expand-lg navbar-dark py-3 fixed-top navbar-custom">
            <div className="container">
                <Link className='navbar-brand' to={'/'}>
                    rahmatsyifana.
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#home" className="nav-link l">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link l">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link l">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link l">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;