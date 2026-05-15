import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
    console.log(name, email, message);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Thank you for your message!</p>}
      <div className="social-media-links">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </div>
  );
}

export default Contact;