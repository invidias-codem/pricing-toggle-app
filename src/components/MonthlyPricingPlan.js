import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';


const MonthlyPricingPlan = () => {
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

  // Submit the contact form information
  const submitContactFormInformation = () => {
    // TODO: Implement this function to submit the contact form information to a server
    alert('Thank you for signing up! You will be in touch with our team of experts shortly!');
  };

  const handleSignUpClick = () => {
    // Submit the contact form information
    submitContactFormInformation();
  };

  return (
    <div className="pricing-plan">
      
      <h2>Monthly Plan</h2>
      <p>$10/month</p>
      <ul>
        <li>Basic features</li>
        <li>1GB storage</li>
        <li>10GB bandwidth</li>
        <li>24/7 support</li>
        
      </ul>

      {/* Render the contact form if the showContactForm state variable is true */}
      {showContactForm && (
        <ContactForm contactInfo={contactInfo} setContactInfo={setContactInfo} />
      )}
       
      <a href="/signup" onClick={handleSignUpClick} className="btn btn-primary">
        Sign Up
      </a>
      
    </div>
    
  );
};

export default MonthlyPricingPlan;








