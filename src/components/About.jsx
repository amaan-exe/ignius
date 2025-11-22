import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)
    const servicesRef = useRef(null)

    const services = [
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Creating intuitive and beautiful user experiences that delight and engage'
        },
        {
            icon: '💻',
            title: 'Web Development',
            description: 'Building fast, scalable, and responsive websites with modern technologies'
        },
        {
            icon: '📱',
            title: 'Mobile Apps',
            description: 'Developing native and cross-platform mobile applications'
        },
        {
            icon: '🚀',
            title: 'Brand Identity',
            description: 'Crafting unique brand identities that stand out in the market'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(
                servicesRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="about" className="about section" ref={sectionRef}>
            <div className="container">
                <div className="about-content">
                    <div className="about-text" ref={contentRef}>
                        <h2 className="section-title">
                            About <span className="gradient-text">Our Agency</span>
                        </h2>
                        <p className="about-description">
                            We are a creative digital agency passionate about transforming ideas into
                            exceptional digital experiences. With a team of talented designers and developers,
                            we craft websites and applications that not only look stunning but also drive
                            real business results.
                        </p>
                        <p className="about-description">
                            Our approach combines cutting-edge technology with creative excellence to deliver
                            solutions that exceed expectations. From startups to established brands, we've
                            helped businesses worldwide achieve their digital goals.
                        </p>
                        <div className="about-stats-inline">
                            <div className="stat-inline">
                                <span className="stat-number-inline gradient-text">5+</span>
                                <span className="stat-label-inline">Years Experience</span>
                            </div>
                            <div className="stat-inline">
                                <span className="stat-number-inline gradient-text">150+</span>
                                <span className="stat-label-inline">Projects Delivered</span>
                            </div>
                            <div className="stat-inline">
                                <span className="stat-number-inline gradient-text">50+</span>
                                <span className="stat-label-inline">Happy Clients</span>
                            </div>
                        </div>
                    </div>

                    <div className="services-grid" ref={servicesRef}>
                        {services.map((service, index) => (
                            <div key={index} className="service-card glass">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
