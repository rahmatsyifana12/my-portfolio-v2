import './Navbar.css';
import { Link } from 'react-router-dom';
import { Link as RsLink } from 'react-scroll';

function Navbar() {
    return (
        <nav id="#nav" className="nav navbar navbar-expand-lg navbar-dark py-3 fixed-top navbar-custom">
            <div className="container">
                <Link className='navbar-brand' to={'/'}>rahmatsyifana.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link l" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link l" to={'/about'}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link l" to={'/portfolio'}>Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;