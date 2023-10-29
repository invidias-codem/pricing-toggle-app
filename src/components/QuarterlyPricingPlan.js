import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

const QuarterlyPricingPlan = () => {
  // Initialize the contactInfo state object
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Initialize the showContactForm state variable
  const [showContactForm, setShowContactForm] = useState(false);

  // Use the useEffect hook to set the showContactForm state variable to true after the component has rendered
  useEffect(() => {
    setShowContactForm(true);
  }, []);

  const price = '$25/quarter';
  const features = [
    'All basic features',
    'Additional features',
    '5GB storage',
    '50GB bandwidth',
  ];

  const handleSignUpClick = () => {
    // Display an alert message
    alert('Thank you for signing up! You will be in touch with our team of experts shortly!');
  };

  return (
    <div className="pricing-plan">
      <h2>Quarterly Plan</h2>
      <p>{price}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {/* Render the contact form if the showContactForm state variable is true */}
      {showContactForm && (
        <ContactForm contactInfo={contactInfo} setContactInfo={setContactInfo} />
      )}

      <a href="/signup" className="btn btn-primary" onClick={handleSignUpClick}>Sign Up</a>
    </div>
  );
};

export default QuarterlyPricingPlan;

