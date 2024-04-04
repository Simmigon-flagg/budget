import React from 'react';

export default function Footer() {
  return (
    <footer className=''>
      <div className="footer-flex">
        <div>
          <h2>Kaipher LLC</h2>
          <p>Innovating Tomorrow Tech</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p><strong>Email:</strong> contact@kaipherllc.com</p>
          {/* <p><strong>Phone:</strong> (123) 456-7890</p> */}
        </div>
        <div>
          {/* <h3>Address</h3>
          <p>123 Kaipher Lane</p>
          <p>Futuristic City, KP 90001</p> */}
        </div>
        <div>
          <h3>Follow Us</h3>
          <ul className="footer-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Kaipher LLC. All rights reserved.</p>
      </div>
    </footer>
  )
}
