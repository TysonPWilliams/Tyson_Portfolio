import React from "react";
import "./Contact.css";

const Contact = () => (
  <section className="contact-section" id="contact-section">
    <div className="contact-content">
      <div className="contact-info">
        <h2>Let's Build Something Amazing Together</h2>
        <p>Ready to bring your ideas to life? I'm here to help you create a web presence that stands out and drives results.</p>
        <div className="contact-methods">
          <a href="mailto:tyson.williams95@gmail.com" className="contact-method" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="email">✉️</span>
            <div>
              <h4>Email</h4>
              <p>tyson.williams95@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/tysonpwilliams/" className="contact-method" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="linkedin">💼</span>
            <div>
              <h4>LinkedIn</h4>
              <p>Connect with me professionally</p>
            </div>
          </a>
          <a href="https://github.com/TysonPWilliams" className="contact-method" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="github">🐙</span>
            <div>
              <h4>GitHub</h4>
              <p>Check out my code repositories</p>
            </div>
          </a>
        </div>
      </div>
      <form className="contact-form" id="contactForm" onSubmit={e => { e.preventDefault(); alert('Message sent! (static demo)'); }}>
        <h3>Send Me a Message</h3>
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <input type="text" id="subject" name="subject" placeholder="Subject" required />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact; 