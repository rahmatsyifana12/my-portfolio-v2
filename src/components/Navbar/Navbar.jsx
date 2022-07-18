import './Navbar.css';

function Navbar() {
    return (
        <nav id="#nav" class="nav navbar navbar-expand-lg navbar-dark py-3 fixed-top navbar-custom">
        <div class="container">
            <a href="#" class="navbar-brand">rahmatsyifana.</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#home" class="nav-link l">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link l">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills" class="nav-link l">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a href="#portfolio" class="nav-link l">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;