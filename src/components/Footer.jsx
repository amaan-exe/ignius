import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="gradient-text">IGNIUS</h3>
                        <p className="footer-tagline">
                            Crafting digital experiences that inspire
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-title">Services</h4>
                            <ul className="footer-list">
                                <li><a href="#projects">Web Development</a></li>
                                <li><a href="#projects">UI/UX Design</a></li>
                                <li><a href="#projects">Mobile Apps</a></li>
                                <li><a href="#projects">Brand Identity</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Company</h4>
                            <ul className="footer-list">
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#projects">Portfolio</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#contact">Careers</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Connect</h4>
                            <ul className="footer-list">
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Dribbble</a></li>
                                <li><a href="#">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} IGNIUS. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <span className="separator">•</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
