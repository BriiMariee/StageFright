import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us for bookings, inquiries, or customer support!</p>
      <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
        <li>
          <a 
            href="mailto:booking@stagefright.com" 
            style={{ color: "#ff0055", textDecoration: "none", fontSize: "18px" }}
          >
            Booking: booking@stagefright.com
          </a>
        </li>
        <li>
          <a 
            href="mailto:support@stagefright.com" 
            style={{ color: "#ff0055", textDecoration: "none", fontSize: "18px" }}
          >
            Customer Support: support@stagefright.com
          </a>
        </li>
        <li>
          <a 
            href="tel:+1234567890" 
            style={{ color: "#ff0055", textDecoration: "none", fontSize: "18px" }}
          >
            Call Us: +1 (234) 567-890
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
