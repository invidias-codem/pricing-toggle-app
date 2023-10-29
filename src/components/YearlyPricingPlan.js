import React, { useState } from 'react';
import ContactForm from './ContactForm';

const YearlyPricingPlan = () => {
  const price = '$99/year';
  const features = [
    'All features',
    'Premium support',
    '20GB storage',
    '200GB bandwidth',
  ];

  // Initialize the contact form information state variables
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Handle the sign up click event
  const handleSignUpClick = () => {
    // Display an alert message
    alert('Thank you for signing up! You will be in touch with our team of experts shortly!');

    // Submit the contact form information
    // TODO: Implement this function to submit the contact form information to a server
  };

  return (
    <div className="pricing-plan">
      <h2>Yearly Plan</h2>
      <p>{price}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a href="/signup" className="btn btn-primary" onClick={handleSignUpClick}>
        Sign Up
      </a>

      {/* Render the contact form */}
      <ContactForm contactInfo={contactInfo} setContactInfo={setContactInfo} />
    </div>
  );
};

export default YearlyPricingPlan;

  