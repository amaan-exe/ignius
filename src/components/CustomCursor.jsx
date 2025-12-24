import { useEffect, useRef } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const cursorDotRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorDot = cursorDotRef.current

        // Check if device supports hover (not touch)
        const hasHover = window.matchMedia('(hover: hover)').matches
        if (!hasHover) return

        let mouseX = 0
        let mouseY = 0
        let cursorX = 0
        let cursorY = 0

        const handleMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY

            // Dot follows immediately
            if (cursorDot) {
                cursorDot.style.left = `${mouseX}px`
                cursorDot.style.top = `${mouseY}px`
            }
        }

        const animate = () => {
            // Smooth follow for outer cursor
            cursorX += (mouseX - cursorX) * 0.15
            cursorY += (mouseY - cursorY) * 0.15

            if (cursor) {
                cursor.style.left = `${cursorX}px`
                cursor.style.top = `${cursorY}px`
            }

            requestAnimationFrame(animate)
        }

        const handleMouseEnter = () => {
            cursor.classList.add('visible')
            cursorDot.classList.add('visible')
        }

        const handleMouseLeave = () => {
            cursor.classList.remove('visible')
            cursorDot.classList.remove('visible')
        }

        // Hover effects for interactive elements
        const handleLinkHover = () => {
            cursor.classList.add('hover')
        }

        const handleLinkLeave = () => {
            cursor.classList.remove('hover')
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseenter', handleMouseEnter)
        document.addEventListener('mouseleave', handleMouseLeave)

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .service-card, .faq-item')
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleLinkHover)
            el.addEventListener('mouseleave', handleLinkLeave)
        })

        animate()

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseenter', handleMouseEnter)
            document.removeEventListener('mouseleave', handleMouseLeave)
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleLinkHover)
                el.removeEventListener('mouseleave', handleLinkLeave)
            })
        }
    }, [])

    return (
        <>
            <div ref={cursorRef} className="custom-cursor" />
            <div ref={cursorDotRef} className="custom-cursor-dot" />
        </>
    )
}

export default CustomCursor
