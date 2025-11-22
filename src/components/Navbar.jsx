import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

const Navbar = () => {
    const navRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)

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
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav
            ref={navRef}
            className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
        >
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <span className="gradient-text">IGNIUS</span>
                    </div>

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
                            <button onClick={() => scrollToSection('contact')} className="nav-link">
                                Contact
                            </button>
                        </li>
                    </ul>

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="btn btn-primary btn-sm"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
