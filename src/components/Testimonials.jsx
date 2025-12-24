import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef(null)

    const testimonials = [
        {
            id: 1,
            name: 'Rahul Sharma',
            role: 'CEO, TechStart India',
            content: 'Ignius Studios transformed our vision into a stunning website. Their attention to detail and creative approach exceeded our expectations. Highly recommended!',
            rating: 5
        },
        {
            id: 2,
            name: 'Priya Patel',
            role: 'Founder, StyleHub',
            content: 'Working with Ignius was a game-changer for our brand. They delivered a beautiful e-commerce platform that increased our conversions by 40%.',
            rating: 5
        },
        {
            id: 3,
            name: 'Amit Kumar',
            role: 'Director, BuildRight Construction',
            content: 'Professional, responsive, and incredibly talented. They understood our requirements perfectly and delivered ahead of schedule.',
            rating: 5
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current.children,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const renderStars = (count) => {
        return Array(count).fill(0).map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))
    }

    return (
        <section id="testimonials" className="testimonials section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Testimonials</div>
                    <h2 className="section-title">What our clients say</h2>
                    <p className="section-subtitle">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </div>

                <div className="testimonials-grid" ref={cardsRef}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-rating">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="testimonial-content">"{testimonial.content}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="author-info">
                                    <span className="author-name">{testimonial.name}</span>
                                    <span className="author-role">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
