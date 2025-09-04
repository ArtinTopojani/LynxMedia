import React, { useRef, useState } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import emailjs from '@emailjs/browser';

const Form = ({ isColTwo }) => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
  const [errorMsg, setErrorMsg] = useState(''); // Detailed error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const result = await emailjs.sendForm(
        'service_mwxhq7e', // Your Service ID
        'template_xg0v0wc', // Your Template ID
        formRef.current,
        'CjE-sm3xTIou_uz_M' // Your Public Key
      );

      console.log('Message sent successfully!', result.text);
      setStatus('success');

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMsg(error?.text || 'An unknown error occurred.');
      setStatus('error');
    }
  };

  return (
    <div className='replay__box cmn__bg'>
      {status === 'success' && (
        <div className='success-message'>
          <h3>Message Sent Successfully</h3>
          <p>Thank you for your comment! It has been submitted successfully.</p>
        </div>
      )}

      {status === 'error' && (
        <div className='error-message'>
          <h3>Message Submission Failed</h3>
          <p>{errorMsg}</p>
        </div>
      )}

      {status === 'loading' && (
        <div className='loading-message'>
          <h3>Sending Message...</h3>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className='row g-4'>
        <div className={`${isColTwo ? 'col-lg-6' : 'col-lg-12'}`}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            required
            disabled={status === 'loading'}
          />
        </div>
        <div className={`${isColTwo ? 'col-lg-6' : 'col-lg-12'}`}>
          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            disabled={status === 'loading'}
          />
        </div>
        <div className='col-lg-12'>
          <textarea
            name='message'
            rows='5'
            placeholder='Write Comments'
            required
            disabled={status === 'loading'}
          ></textarea>
        </div>
        <div className='col-lg-12'>
          <button
            type='submit'
            className='d-flex fw-500 cmn--btn align-items-center gap-2'
            disabled={status === 'loading'}
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
    </div>
  );
};

export default Form;
