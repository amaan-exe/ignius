import { useState, useEffect } from 'react'
import './ScrollProgress.css'

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = (scrollTop / docHeight) * 100
            setProgress(scrollPercent)
        }

        window.addEventListener('scroll', updateProgress)
        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    return (
        <div className="scroll-progress">
            <div
                className="scroll-progress-bar"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}

export default ScrollProgress
