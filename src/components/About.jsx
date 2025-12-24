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
            number: '01',
            title: 'UI/UX Design',
            description: 'Creating intuitive and beautiful user experiences that delight and engage your audience.'
        },
        {
            number: '02',
            title: 'Web Development',
            description: 'Building fast, scalable, and responsive websites with modern technologies.'
        },
        {
            number: '03',
            title: 'Mobile Apps',
            description: 'Developing native and cross-platform mobile applications for iOS and Android.'
        },
        {
            number: '04',
            title: 'Brand Identity',
            description: 'Crafting unique brand identities that stand out and resonate with your market.'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            )

            gsap.fromTo(
                servicesRef.current.children,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
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
                        <div className="section-label">About Us</div>
                        <h2 className="about-title">
                            We craft digital products that drive business growth.
                        </h2>
                        <p className="about-description">
                            We are a creative digital agency passionate about transforming ideas into
                            exceptional digital experiences. With a team of talented designers and developers,
                            we craft websites and applications that not only look stunning but also drive
                            real business results.
                        </p>
                        <p className="about-description">
                            Our approach combines cutting-edge technology with creative excellence to deliver
                            solutions that exceed expectations.
                        </p>
                        <div className="about-stats-inline">
                            <div className="stat-inline">
                                <span className="stat-number-inline">1+</span>
                                <span className="stat-label-inline">Years</span>
                            </div>
                            <div className="stat-inline">
                                <span className="stat-number-inline">15+</span>
                                <span className="stat-label-inline">Projects</span>
                            </div>
                            <div className="stat-inline">
                                <span className="stat-number-inline">10+</span>
                                <span className="stat-label-inline">Clients</span>
                            </div>
                        </div>
                    </div>

                    <div className="services-section">
                        <div className="services-header">
                            <h3 className="services-title">What We Do</h3>
                        </div>
                        <div className="services-grid" ref={servicesRef}>
                            {services.map((service, index) => (
                                <div key={index} className="service-card">
                                    <span className="service-number">{service.number}</span>
                                    <h4 className="service-title">{service.title}</h4>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
