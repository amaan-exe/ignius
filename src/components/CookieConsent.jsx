import { useState, useEffect } from 'react'
import './CookieConsent.css'

const CookieConsent = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        // Check if user has already accepted cookies
        const hasConsent = localStorage.getItem('cookieConsent')
        if (!hasConsent) {
            // Delay showing the banner for better UX
            const timer = setTimeout(() => setVisible(true), 2000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted')
        setVisible(false)
    }

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="cookie-consent">
            <div className="cookie-content">
                <div className="cookie-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="8" cy="9" r="1" fill="currentColor" />
                        <circle cx="15" cy="8" r="1" fill="currentColor" />
                        <circle cx="10" cy="14" r="1" fill="currentColor" />
                        <circle cx="16" cy="13" r="1" fill="currentColor" />
                        <circle cx="13" cy="17" r="1" fill="currentColor" />
                    </svg>
                </div>
                <div className="cookie-text">
                    <h4>We use cookies</h4>
                    <p>
                        We use cookies to enhance your browsing experience and analyze site traffic.
                        By clicking "Accept", you consent to our use of cookies.
                    </p>
                </div>
                <div className="cookie-actions">
                    <button className="btn-decline" onClick={handleDecline}>
                        Decline
                    </button>
                    <button className="btn-accept" onClick={handleAccept}>
                        Accept
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CookieConsent
