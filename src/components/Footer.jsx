import { useLocation, useNavigate } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const location = useLocation()
    const navigate = useNavigate()

    const scrollToSection = (id) => {
        // If we're on the catalog page, navigate to home first
        if (location.pathname === '/catalog') {
            navigate('/')
            // Use setTimeout to wait for navigation to complete
            setTimeout(() => {
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        } else {
            // We're already on the home page, just scroll
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

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
                                <li><button onClick={() => scrollToSection('projects')}>Web Development</button></li>
                                <li><button onClick={() => scrollToSection('projects')}>UI/UX Design</button></li>
                                <li><button onClick={() => scrollToSection('projects')}>Mobile Apps</button></li>
                                <li><button onClick={() => scrollToSection('projects')}>Brand Identity</button></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Company</h4>
                            <ul className="footer-list">
                                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                                <li><button onClick={() => scrollToSection('projects')}>Portfolio</button></li>
                                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                                <li><button onClick={() => scrollToSection('contact')}>Careers</button></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Connect</h4>
                            <ul className="footer-list">
                                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
                                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} IGNIUS. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="mailto:ignuisstudios@gmail.com">Contact Us</a>
                        <span className="separator">•</span>
                        <a href="tel:+916205708606">Call Us</a>
                        <span className="separator">•</span>
                        <a href="https://wa.me/916205708606?text=Hi!%20I%27d%20like%20to%20discuss%20a%20project%20with%20Ignius%20Studios" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
