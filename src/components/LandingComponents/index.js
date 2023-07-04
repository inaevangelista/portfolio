import * as React from 'react';
import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CardPortfolio from "../Cards/CardPortfolio";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';


function Intro() {
    return (
        <div className='intro_con' >
            <div className='row'>
                <div className='col logo_con'>
                    <img src='../ina_logo.svg' alt="logo" className='logo' />
                </div>
                <div className='col welcome_con'>
                    <h1 className='welcome_name'>
                        Ina Patricia Evangelista
                    </h1>
                    <div className='line'></div>
                    <div className='welcome_obj'>
                        A graduating 4th year Computer Science student
                        that is eager to secure an internship with my skills
                        and experience in UI/UX designing and web development,
                        both front-end and back-end. Seeking to grow and work
                        with inspiring teams to produce valuable and significant projects.
                    </div>

                    <Button className='welcome_btn'>
                        <h6>Get to know me!</h6>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className='row contact_con' >
            <h6 className='col contact_item_email'>
                <FaEnvelope />
                <span className='contact_item_content_email'>
                    evangelista.ina.patricia
                </span>
                <span>
                    @gmail.com
                </span>
            </h6>
            <h6 className='col contact_item'>
                <FaPhoneAlt />
                <span className='contact_item_content'>
                    +63 969 623 0254
                </span>
            </h6>
            <h6 className='col contact_item'>
                <FaMapMarkerAlt />
                <span className='contact_item_content'>
                    Bacoor City, Cavite, Philippines
                </span>
            </h6>
        </div>
    );
}

function Skills() {
    return (
        <div className='skills_con'>
            <div className='row center'>
                <div className='col-sm-5'>
                    <h2 className='skills_title'>
                        What I can provide you
                    </h2>
                    <div className='skills_desc'>
                        I am a highly motivated and creative undergraduate student
                        that works tirelessly. I am passionate and dedicated that is
                        committed to delivering exceptional results for my projects,
                        harnessing a strong communication and collaboration skills to
                        work effectively in teams.
                    </div>
                </div>
                <div className='col-sm-7 row'>
                    <div className='col ux_con'>
                        <div className='ux'>
                            <h4>
                                UI/UX Design
                            </h4>
                            <h5>
                                Figma & Adobe Illustrator
                            </h5>
                            <div className='ux_desc'>
                                Prototyping, Wireframes, Logo making, Icons, Graphics, etc.
                            </div>
                        </div>

                    </div>
                    <div className='col web_con'>
                        <div className='web'>
                            <h4>
                                Web Development
                            </h4>
                            <h5>
                                Full Stack
                            </h5>
                            <div className='web_desc'>
                                JavaScript, ReactJS, NodeJS, HTML, CSS, Bootstrap
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Portfolio() {
    return (
        <div className='portfolio_con'>
            <h2 className='portfolio_title'>
                My Portfolio
            </h2>
            <div className='portfolio_desc'>
                Below is a list of some designs and projects I created.
            </div>
            <div className=''>
                <CardPortfolio />
            </div>
        </div>
    );
}


function Greet() {
    return (
        <div className='row greet_con'>
            <div className='col greet_title_con'>
                <h2 className='greet_title'>
                    Hello there, so nice to meet you!
                </h2>
                <div className='greet_desc'>
                    I bring a wealth of experience and expertise to every
                    project I work on. With a keen eye for detail and a
                    passion for creating visually stunning websites/mobile
                    apps, I strive to deliver designs that are both functional
                    and aesthetically pleasing. Over the years, I have honed
                    my skills in a variety of areas, including HTML,
                    CSS, React, JavaScript, and UI design.
                </div>
            </div>
            <div className='col greet_img_con'>
                <img src='../me.png' alt="logo" className='greet_img' />
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className='footer_con'>
            <div className='row center'>
                <div className='col'>
                    <h2 className='footer_name'>
                        Ina Patricia Evangelista
                    </h2>
                    <div className='footer_info'>
                        <h4>
                            De La Salle University - Manila
                        </h4>
                        <h5>
                            BS Computer Science Major in Software Technology
                        </h5>
                    </div>
                </div>
                <div className='col footer_contact'>
                    <h5 className='footer_contact_emailcon'>
                        <span className=''>
                            evangelista.ina.patricia
                        </span>
                        <span className='footer_contact_email'>
                            @gmail.com
                        </span>
                        <FaEnvelope />
                    </h5>
                    <h5 className=''>
                        <span className='footer_contact_item'>
                            +63 969 623 0254
                        </span>
                        <FaPhoneAlt />
                    </h5>
                    <h5 className=''>
                        <span className='footer_contact_item'>
                            Bacoor City, Cavite, Philippines
                        </span>
                        <FaMapMarkerAlt />
                    </h5>
                </div>
            </div>
        </div>
    );
}




function Landing() {


    const scrollDown = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    const skillsSection = useRef(null);
    const portfolioSection = useRef(null);
    const footerSection = useRef(null);

    return (
        <div className='bg'>
            <div className='con'>
                <Navbar collapseOnSelect expand='lg' variant='light' className='navbar_con top_z'>
                    <Container fluid>
                        <Navbar.Brand href='#home' className='logo_nav_con'>
                            <img src='../ina_logo_nav.svg' alt="logo" className='logo_nav' />
                            <span className='logo_name'>ipe</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='me-auto'>
                            </Nav>
                            <Nav className='nav_link_con'>
                                <Nav.Link className='text_black' onClick={() => scrollDown(skillsSection)}><h5>Skills</h5></Nav.Link>
                                <Nav.Link className='text_black' onClick={() => scrollDown(portfolioSection)}><h5>Portfolio</h5></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='intro_con' >
                    <div className='row'>
                        <div className='col logo_con'>
                            <img src='../ina_logo.svg' alt="logo" className='logo' />
                        </div>
                        <div className='col welcome_con'>
                            <h1 className='welcome_name'>
                                Ina Patricia Evangelista
                            </h1>
                            <div className='line'></div>
                            <div className='welcome_obj'>
                                A graduating 4th year Computer Science student
                                that is eager to secure an internship with my skills
                                and experience in UI/UX designing and web development,
                                both front-end and back-end. Seeking to grow and work
                                with inspiring teams to produce valuable and significant projects.
                            </div>

                            <Button className='welcome_btn'  onClick={() => scrollDown(footerSection)}>
                                <h6>Get to know me!</h6>
                            </Button>
                        </div>
                    </div>
                </div>
                <Contact />
            </div>

            <div className='bg' ref={skillsSection}>
                <Skills />
            </div>

            <div className='con' ref={portfolioSection}>
                <Portfolio />
            </div>
            <div className='greet_con2'>
                <Greet />
            </div>
            <div className='bg' ref={footerSection}>
                <Footer />
            </div>

        </div>
    );
}

export default Landing;
