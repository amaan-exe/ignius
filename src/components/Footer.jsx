import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>IGNIUS <span className="accent">STUDIOS</span></h3>
                        <p className="footer-tagline">
                            Crafting digital experiences that inspire and drive results.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-title">Services</h4>
                            <ul className="footer-list">
                                <li><button onClick={() => scrollToSection('about')}>Web Development</button></li>
                                <li><button onClick={() => scrollToSection('about')}>UI/UX Design</button></li>
                                <li><button onClick={() => scrollToSection('about')}>Mobile Apps</button></li>
                                <li><button onClick={() => scrollToSection('about')}>Brand Identity</button></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Company</h4>
                            <ul className="footer-list">
                                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                                <li><button onClick={() => scrollToSection('projects')}>Portfolio</button></li>
                                <li><button onClick={() => scrollToSection('process')}>Process</button></li>
                                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Connect</h4>
                            <ul className="footer-list">
                                <li><a href="https://wa.me/916205708606" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                                <li><a href="mailto:ignuisstudios@gmail.com">Email</a></li>
                                <li><a href="tel:+916205708606">Phone</a></li>
                                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        {currentYear} Ignius Studios. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="mailto:ignuisstudios@gmail.com">Contact Us</a>
                        <span className="separator">|</span>
                        <a href="tel:+916205708606">Call Us</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
