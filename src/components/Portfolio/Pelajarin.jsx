import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Portfolio.css';

function Pelajarin() {
    return (
        <div>
            <Navbar />
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="port-title fw-bold mb-4">
                        Pelajarin
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-me">
                                <div className="mb-2 desc fw-bold">Description</div>
                                <p className="p-desc">
                                    An LMS web application used for teaching and learning. This project was developed in 2 weeks to fulfill the final team project for Software Engineering Academy Compfest 2022. Kudos to my frontend teammates who have designed and developed the frontend even though they were just learning TypeScript as the language used to develop the frontend of this project.
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
                    <a className="repo" href="https://github.com/Team-1-Compfest-14/be-smk-sea-sentosa-finalproject-compfest-14">Visit Repository</a>
                    <div id="carouselExampleIndicators" class="carousel slide mt-2 mb-2 carousel-dark" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/images/portfolio-img/pelajarin1.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/portfolio-img/pelajarin2.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/portfolio-img/pelajarin3.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/portfolio-img/pelajarin4.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/portfolio-img/pelajarin5.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/portfolio-img/pelajarin6.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/portfolio-img/pelajarin7.png" class="d-block w-100" alt="..."/>
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
                                        <li>Created database design and collaborated with other developers to make all features (APIs).</li>
                                        <li>Implemented jwt (jsonwebtoken) for website auth.</li>
                                        <li>Implemented layered architecture design.</li>
                                        <li>Implemented CI/CD using github action.</li>
                                        <li>Implemented integration testing using Jest.</li>
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

export default Pelajarin;