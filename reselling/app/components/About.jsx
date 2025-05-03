import React from 'react';
import './About.css'; // Import the CSS file for styling
import Map from './Map.js'; // Import the Map component

const About = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <h2><br></br>How It Works</h2>
        <div className="how-it-works-steps">
          <div className="how-it-works-step">
            <h3>Step 1: Create an Account</h3>
            <p>
              Getting started is simple! Just sign up for a free account. We only need a few details to set up your profile and get you ready to buy or sell tickets. It’s quick, secure, and will take just a few minutes.
            </p>
          </div>
          <div className="how-it-works-step">
            <h3>Step 2: List Your Tickets</h3>
            <p>
              Have tickets you want to sell? List them easily by entering the event details such as the name, date, location, and your asking price. You can even add a brief description to help potential buyers understand why your tickets are a great choice!
            </p>
          </div>
          <div className="how-it-works-step">
            <h3>Step 3: Sell and Get Paid</h3>
            <p>
              Once your tickets are listed, interested buyers can purchase them directly through our platform. After a successful sale, we ensure that the payment is processed quickly and securely.
               You’ll receive your funds directly into your account, and get to keep your earnings!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
