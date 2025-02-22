import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>Get in touch with us through this section:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
      {success && <p style={{ color: "green", marginTop: "10px" }}>Thank you for your feedback! We will get back to you soon.</p>}
    </section>
  );
}

export default Contact;