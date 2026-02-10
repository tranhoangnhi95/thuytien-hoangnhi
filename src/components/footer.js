import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-thank-you">
              <p className="section-content">
                Thank you for being part of our journey.
              </p>
              <span className="footer-couple-names">Hoàng Nhi &amp; Thủy Tiên</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes footerHeartPulse {0%,100% {transform: scale(1);}
50% {transform: scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-scroll-handler">
(function(){
  /**
   * Smooth scroll behavior for internal anchor links is already 
   * handled by standard browser behavior and the platform's 
   * smooth-scroll implementation. No additional JS required 
   * for basic footer functionality.
   */
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
