import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>GenZ Step</h3>
          <p>Empowering students to study abroad through our comprehensive agentship services.</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: genz.stepp@gmail.com</p>
          <p>Phone: +60175994407</p>
          <p>Facebook: <a href="https://www.facebook.com/genzstep?rdid=5tAAxfo6yIBgew7t&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FKVx2djVr%2F" target="_blank" rel="noopener noreferrer">GenZ Step</a></p>
        </div>
        
        <div className="footer-section">
          <h4>Location</h4>
          <p>Kuala Lumpur</p>
          <p>Petaling Jaya</p>
          <p>Malaysia</p>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <p>Study in Malaysia</p>
          <p>Study in Australia</p>
          <p>Student Consultancy</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSc5TNZOgcPev6W61xetmy5IccAvWwpBN-9bBYfGNqFNoW46Hw/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="contact-form-link">Fill Contact Form</a></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 GenZ Step. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer