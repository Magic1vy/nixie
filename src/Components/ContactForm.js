import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';


const ContactForm = React.forwardRef((props, ref) => {

  const currentDate = new Date().toISOString().split("T")[0];
  const [state, handleSubmit] = useForm("mlekygna");
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value) => {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        const intlCode = (match[1] ? '+1 ' : '');
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return value;
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };

  if (state.succeeded) {
      return <h2 className='heading contact-form-message'>Thank you for filling out the form. I will contact you soon!</h2>;
  }

  return (
    <div ref={ref}>
      <h1 className='heading'>Let's start a conversation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Your Full Name: 
          <input 
              className='input'
              type="text" 
              name="name" 
              autoComplete="name" 
              placeholder="Jane Doe"
              required/>
        </label>
        <label htmlFor="phone">
          Your Phone Number:
          <input 
              className='input'
              type="text" 
              name="phone" 
              value={phoneNumber}
              onChange={handleChange}
              placeholder="(555) 555-5555"
              autoComplete="tel"
              required/>
        </label>
        <label htmlFor="email">
          Your Email: <span className="optional">(Optional)</span>
          <input 
              className='input'
              type="email" 
              name="email"
              placeholder="youremail@example.com"
              autoComplete="email" />
        </label>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="date">
          Choose date: <span className="optional">(Optional)</span>
          <input 
            className='input'
            type="date" 
            name="date" 
            min={currentDate}/>
        </label>
        <label htmlFor="message">
          Leave your message:
          <textarea
            id="message"
            name="message"
            placeholder="Type here..."
            autoComplete="off"
            required
          />
        </label>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button className="submit-btn"
        type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  );
}
)
export default ContactForm;
