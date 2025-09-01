import React, { useRef, useState } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Form = ({ isColTwo }) => {
  const formRef = useRef();
  const [status, setStatus] = useState(''); // State for tracking message status

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mwxhq7e', // Your service ID
        'template_xg0v0wc', // Your template ID
        formRef.current,
        'CjE-sm3xTIou_uz_M' // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Message sent successfully!', result.text);
          setStatus('success'); // Set success status
          formRef.current.reset(); // Reset the form
        },
        (error) => {
          console.error('Failed to send message:', error.text);
          setStatus('error'); // Set error status
        }
      );
  };

  return (
    <div className='replay__box cmn__bg'>
      {status === 'success' ? (
        <div className='success-message'>
          <h3>Message Sent Successfully</h3>
          <p>Thank you for your comment! It has been submitted successfully.</p>
        </div>
      ) : status === 'error' ? (
        <div className='error-message'>
          <h3>Message Submission Failed</h3>
          <p>Something went wrong. Please try again later.</p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className='row g-4'>
          <div className={`${isColTwo ? 'col-lg-6' : 'col-lg-12'}`}>
            <input type='text' name='name' placeholder='Name' required />
          </div>
          <div className={`${isColTwo ? 'col-lg-6' : 'col-lg-12'}`}>
            <input type='email' name='email' placeholder='Email' required />
          </div>
          <div className='col-lg-12'>
            <textarea
              name='message'
              rows='5'
              placeholder='Write Comments'
              required
            ></textarea>
          </div>
          <div className='col-lg-12'>
            <button
              type='submit'
              className='d-flex fw-500 cmn--btn align-items-center gap-2'
            >
              <span className='get__text'>Submit Comment</span>
              <span>
                <i className='fz-20'>
                  <ArrowRight />
                </i>
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
