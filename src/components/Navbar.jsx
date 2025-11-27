import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import './Navbar.css'

const Navbar = () => {
    const navRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        // Navbar entrance animation
        gsap.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        )

        // Scroll effect
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
        setIsMobileMenuOpen(false)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav
            ref={navRef}
            className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
        >
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo">
                        <span className="gradient-text">IGNIUS</span>
                    </Link>

                    <ul className="navbar-menu">
                        <li>
                            <button onClick={() => scrollToSection('hero')} className="nav-link">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('projects')} className="nav-link">
                                Projects
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')} className="nav-link">
                                About
                            </button>
                        </li>
                        <li>
                            <Link to="/catalog" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                                Catalog
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')} className="nav-link">
                                Contact
                            </button>
                        </li>
                    </ul>

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="btn btn-primary btn-sm navbar-cta"
                    >
                        Get Started
                    </button>

                    <button
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="mobile-menu-list">
                        <li>
                            <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">
                                Projects
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
                                About
                            </button>
                        </li>
                        <li>
                            <Link to="/catalog" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                                Catalog
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
                                Contact
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="btn btn-primary btn-full"
                            >
                                Get Started
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
