import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

const Hero = () => {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)
    const statsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(
                titleRef.current,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
            )

            // Subtitle animation
            gsap.fromTo(
                subtitleRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
            )

            // CTA buttons animation
            gsap.fromTo(
                ctaRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.7, stagger: 0.15 }
            )

            // Stats animation
            if (statsRef.current) {
                gsap.fromTo(
                    statsRef.current.children,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.9, stagger: 0.1 }
                )
            }
        }, heroRef)

        return () => ctx.revert()
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="hero" ref={heroRef}>
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-tagline">
                        <span>Web Design Agency</span>
                    </div>

                    <h1 ref={titleRef} className="hero-title">
                        We Build Digital
                        <br />
                        <span className="highlight">Experiences</span>
                        <br />
                        That Matter.
                    </h1>

                    <p ref={subtitleRef} className="hero-subtitle">
                        A creative studio specializing in web design, development, and digital
                        solutions that help brands stand out and drive results.
                    </p>

                    <div ref={ctaRef} className="hero-cta">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn btn-primary"
                        >
                            View Our Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn btn-secondary"
                        >
                            Get in Touch
                        </button>
                    </div>

                    <div ref={statsRef} className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Satisfaction</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Clients</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
