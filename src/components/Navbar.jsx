import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

const Navbar = () => {
    const navRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        )

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
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
                    <button onClick={scrollToTop} className="navbar-logo">
                        IGNIUS <span className="accent">STUDIOS</span>
                    </button>

                    <ul className="navbar-menu">
                        <li>
                            <button onClick={() => scrollToSection('hero')} className="nav-link">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')} className="nav-link">
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('projects')} className="nav-link">
                                Work
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('process')} className="nav-link">
                                Process
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')} className="nav-link">
                                Contact
                            </button>
                        </li>
                    </ul>

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="btn btn-primary navbar-cta"
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
                            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">
                                Work
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('process')} className="mobile-nav-link">
                                Process
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
                                Contact
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="btn btn-primary"
                                style={{ width: '100%', marginTop: '1rem' }}
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
