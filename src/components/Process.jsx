import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Process.css'

gsap.registerPlugin(ScrollTrigger)

const Process = () => {
    const sectionRef = useRef(null)
    const stepsRef = useRef(null)

    const steps = [
        {
            number: '01',
            title: 'Discovery Call',
            description: 'We start with a free consultation to understand your vision, goals, and requirements.'
        },
        {
            number: '02',
            title: 'Project Details',
            description: 'We gather all the details, create a project scope, timeline, and provide a quote.'
        },
        {
            number: '03',
            title: 'Design Review',
            description: 'We present design concepts and mockups for your feedback and approval.'
        },
        {
            number: '04',
            title: 'Development',
            description: 'Our team builds your project using modern technologies and best practices.'
        },
        {
            number: '05',
            title: 'Revisions',
            description: 'We refine and polish based on your feedback until you are 100% satisfied.'
        },
        {
            number: '06',
            title: 'Launch',
            description: 'Final delivery with deployment, documentation, and ongoing support options.'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                stepsRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: stepsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="process" className="process section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Our Process</div>
                    <h2 className="section-title">How we work</h2>
                    <p className="section-subtitle">
                        A transparent, collaborative process designed to deliver exceptional results.
                    </p>
                </div>

                <div className="process-grid" ref={stepsRef}>
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process
