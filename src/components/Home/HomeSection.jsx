import { Link } from "react-router-dom";
import Typed from 'react-typed';

function HomeSection() {
    const strings = ['a student', 'a web developer', 'a tech enthusiast'];
    return (
        <section id="home" className="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg col-one">
                        <div className="text-md-start text-center">
                            <div className="links mb-5 mb-md-4">
                                <div className="link">
                                    <a href="https://www.linkedin.com/in/rahmatsyifana12/">
                                        <i className="fa fa-linkedin-square"></i>
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="https://github.com/rahmatsyifana12">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="https://www.facebook.com/AanRahmat1212">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="greet mb-5 mb-md-4">
                                <div className="hello">Hi, my name is</div>
                                <div className="name fw-bold">Rahmat Syifana Jaelani</div>
                                <div className="a-what fw-bold">I am <span className="auto-type" style={{color: "crimson;"}}>
                                        <Typed strings={strings} typeSpeed={80} backSpeed={80} />
                                    </span></div>
                            </div>
                            <Link className="my-portfolio-btn" to={'/portfolio'}>My Portfolio</Link>
                        </div>
                    </div>
                    <div className="col-lg col-two">
                        <div className="home-img">
                            <img className="img-fluid w-100 d-none d-lg-block" src="/images/home-img.svg" alt="home img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;