import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Portfolio.css';

function Difabel() {
    return (
        <div>
            <Navbar />
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="port-title fw-bold mb-4">
                        Difabel
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-me">
                                <div className="mb-2 desc fw-bold">Description</div>
                                <p className="p-desc">
                                    A web application that provides information about the distribution of people with disabilities using map distribution, provides the latest articles related to persons with disabilities and accepts donations.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-me">
                                <div className="mb-2 desc fw-bold">Role</div>
                                <p className="p-desc">
                                    <ul>
                                        <li>Backend developer</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <a className="repo" href="https://github.com/Hydra-Gang/difabel-project-be">Visit Repository</a>
                    <div id="carouselExampleIndicators" class="carousel slide mt-2 mb-2 carousel-dark" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/images/portfolio-img/difabel1.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/portfolio-img/difabel2.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/portfolio-img/difabel3.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/portfolio-img/difabel4.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/portfolio-img/difabel5.png" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-me">
                                <div className="mb-2 mt-3 desc fw-bold">Jobs</div>
                                <p className="p-desc">
                                    <ul>
                                        <li>Created database design and collaborated with other developers to make all features.</li>
                                        <li>Implemented jwt (jsonwebtoken) for website auth.</li>
                                        <li>Implemented Model-View-Controller design.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-me">
                                <div className="mb-2 mt-3 desc fw-bold">Techstacks</div>
                                <p className="p-desc">
                                    <ul>
                                        <li>TypeScript</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>PostgreSQL</li>
                                        <li>TypeORM</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Difabel;