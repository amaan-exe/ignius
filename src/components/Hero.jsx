import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

const Hero = () => {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)
    const floatingRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(
                titleRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.5 }
            )

            // Subtitle animation
            gsap.fromTo(
                subtitleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 }
            )

            // CTA buttons animation
            gsap.fromTo(
                ctaRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.1, stagger: 0.2 }
            )

            // Floating elements animation
            if (floatingRef.current) {
                gsap.to(floatingRef.current.children, {
                    y: -20,
                    duration: 2,
                    ease: 'power1.inOut',
                    stagger: 0.3,
                    repeat: -1,
                    yoyo: true
                })
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
        <section id="hero" className="hero section" ref={heroRef}>
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <h1 ref={titleRef} className="hero-title">
                        Crafting Digital
                        <br />
                        <span className="gradient-text">Experiences</span>
                        <br />
                        That Inspire
                    </h1>

                    <p ref={subtitleRef} className="hero-subtitle">
                        We design and develop stunning websites and applications that elevate your brand
                        and captivate your audience with cutting-edge technology and creative excellence.
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
                            Start a Project
                        </button>
                    </div>

                    <div ref={floatingRef} className="hero-stats">
                        <div className="stat-item glass">
                            <div className="stat-number gradient-text">150+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-item glass">
                            <div className="stat-number gradient-text">98%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                        <div className="stat-item glass">
                            <div className="stat-number gradient-text">50+</div>
                            <div className="stat-label">Happy Clients</div>
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
