import React, { useState } from 'react';
import './FAQ.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How can I create an IRCTC account login ID?',
      answer: 'To create a new IRCTC login ID, visit the IRCTC official homepage. Click on the "Sign Up" option located below the login box. Fill out the registration form with your desired user ID, password, security question, and preferred language. Provide personal details such as your name, gender, Aadhaar card number, PAN card number, and residential address. After submitting the form, you\'ll receive a verification link on your registered email. Follow the instructions in the email to complete your registration.'
    },
    {
      question: 'Can I change my IRCTC login ID?',
      answer: 'Once you have registered your IRCTC login ID, it cannot be changed. You cannot modify your username or login credentials for the registered email address.'
    },
    {
      question: 'How can I log into my IRCTC account?',
      answer: 'Open the ixigo app or visit the IRCTC website. Enter your registered username and password. Select your travel details, such as departure and arrival destinations, travel date, and class. Proceed by clicking "Pay Now" to complete the payment. Once the payment is successful, you will be prompted to enter your password to finalize the booking.'
    },
    {
      question: 'What is the maximum number of IRCTC train tickets one can book at a time?',
      answer: 'You can book up to 12 tickets per month and up to 6 seats/berths per ticket. Thus, you can book a maximum of 36 tickets in a month with a single IRCTC User ID.'
    },
    {
      question: 'How can I recover my IRCTC user ID and password?',
      answer: 'Your login details are included in the IRCTC welcome message sent to your registered email. If you can\'t find this email, go to the IRCTC website and click on "Forgot Password" or "Forgot User ID" to reset your details. Follow the instructions to receive an OTP via email/SMS, enter your new details, and update your password or recover your user ID.'
    },
    {
      question: 'How can I book railway tickets by mobile?',
      answer: 'Use the ixigo trains app or visit the official IRCTC website on your mobile device. Choose your route, travel date, and preferred seat. Enter passenger details, including your IRCTC user ID, and complete the payment to book your ticket.'
    },
    {
      question: 'How do I cancel an IRCTC train ticket after the train has departed?',
      answer: 'Tickets can be canceled up to 48 hours before the scheduled departure. After the chart preparation, online cancellation is not possible.'
    },
    {
      question: 'Are children charged for IRCTC train ticket booking?',
      answer: 'Children under 5 years travel free. For children aged 5 to 12 years, a full fare is charged if a separate berth is opted for. If no berth is required, half the adult fare applies.'
    },
    {
      question: 'What is TDR in your IRCTC train ticket?',
      answer: 'TDR stands for Ticket Deposit Receipt. It is used to claim a refund if you have not traveled with a confirmed ticket. TDR can be filed online if the train chart is prepared. It applies to various scenarios, including train delays, changes in reservation status, and incorrect fare charges. For more details, visit the IRCTC website.'
    }
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
