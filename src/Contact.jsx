import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="centered-section">
    <section className="contact-section" id="contact-section">
      <div className="contact-content-modern">
        <div className="contact-badge">Get In Touch</div>
        <div className="contact-info-modern">
          <h2 className="contact-title">Let's Build Something Amazing Together</h2>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? I'm here to help you create a web presence that stands out and drives results.
          </p>
          <div className="contact-methods-modern">
            <a href="mailto:tyson.williams95@gmail.com" className="contact-method-modern" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon email-icon">
                <rect x="2" y="6" width="20" height="12" rx="2" stroke="#22C55E" stroke-width="2" fill="none"/>
                <path d="M2 8L12 15L22 8" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              <div className="contact-method-content">
                <h4>Email</h4>
                <p>tyson.williams95@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/tysonpwilliams/" className="contact-method-modern" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon linkedin-icon">
                <rect x="4" y="4" width="24" height="24" rx="5" stroke="#22C55E" stroke-width="2" fill="none"/>
                <text x="11" y="22" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="none" stroke="#22C55E" stroke-width="1.2">in</text>
              </svg>
              <div className="contact-method-content">
                <h4>LinkedIn</h4>
                <p>Connect with me professionally</p>
              </div>
            </a>
            <a href="https://github.com/TysonPWilliams" className="contact-method-modern" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon github-icon">
                <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 21.9627 5.7812 22.5 4.5C22.5 4.5 21.5 4 19.5 6C17.5 5.5 15.5 5.5 13.5 6C11.5 5.5 9.5 5.5 7.5 6C5.5 4 4.5 4.5 4.5 4.5C5.0373 5.7812 5.5003 7.12383 5.5 8.52C5.5 13.97 8.8 15.16 11.94 15.55C11.611 15.8899 11.3572 16.2954 11.195 16.7399C11.0328 17.1844 10.9657 17.6581 11 18.13V22" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 15C4 16.5 4 12.5 2 12" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div className="contact-method-content">
                <h4>GitHub</h4>
                <p>Check out my code repositories</p>
              </div>
            </a>
          </div>
        </div>
        <form className="contact-form-modern" id="contactForm" action="https://formspree.io/f/xzzgqddr" method="POST">
          <h3 className="form-title">Send Me a Message</h3>
          <div className="form-group-modern">
            <input type="text" id="name" name="name" placeholder="Your Name" required className="form-input-modern" />
          </div>
          <div className="form-group-modern">
            <input type="email" id="email" name="email" placeholder="Your Email" required className="form-input-modern" />
          </div>
          <div className="form-group-modern">
            <input type="text" id="subject" name="subject" placeholder="Subject" required className="form-input-modern" />
          </div>
          <div className="form-group-modern">
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required className="form-textarea-modern"></textarea>
          </div>
          <button type="submit" className="submit-btn-modern">Send Message</button>
        </form>
      </div>
    </section>
  </div>
);

export default Contact; 