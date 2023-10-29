import React from 'react';

const ContactForm = ({ contactInfo, setContactInfo }) => {
  // Check if the contactInfo.name property is defined before trying to access it
  const name = contactInfo?.name ?? '';

  return (
    <form>
      <div className="contact-form input">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={contactInfo.email}
        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
      />
      <input
        type="phone"
        placeholder="Phone"
        value={contactInfo.phone}
        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
      />
      </div>
      <button type="submit">Submit</button>
    </form>
      
  );
};

export default ContactForm;

