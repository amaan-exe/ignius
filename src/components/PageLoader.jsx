import { useState, useEffect } from 'react'
import './PageLoader.css'

const PageLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setVisible(false)
                        onComplete?.()
                    }, 500)
                    return 100
                }
                return prev + Math.random() * 15 + 5
            })
        }, 100)

        return () => clearInterval(interval)
    }, [onComplete])

    if (!visible) return null

    return (
        <div className={`page-loader ${progress >= 100 ? 'complete' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">
                    IGNIUS <span>STUDIOS</span>
                </div>
                <div className="loader-progress">
                    <div
                        className="loader-progress-bar"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
                <div className="loader-percent">
                    {Math.min(Math.round(progress), 100)}%
                </div>
            </div>
        </div>
    )
}

export default PageLoader
