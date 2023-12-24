import React, { useState, useRef, useEffect  } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ContactForm = () => {
  
  
    const isMounted = useRef(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value||'',
    });
    // Validate on change (you can customize these conditions)
    validateField(name, value);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: value.length < 1 ? 'Name is required' : '',
        }));
        break;
      case 'email':
        // A simple email validation (you can use a library like validator.js for more robust validation)
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address',
        }));
        break;
      case 'phone':
        // A simple phone number validation (you can customize it further)
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: /^[0-9]{10}$/.test(value) ? '' : 'Invalid phone number',
        }));
        break;
      case 'message':
        setErrors((prevErrors) => ({
          ...prevErrors,
          message: value.length < 1 ? 'Message is required' : '',
        }));
        break;
      default:
        break;
    }
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    return () => {
      isMounted.current = false; // Set isMounted to false when the component unmounts
    };
  }, []);
  const apiUrl = "https://jade-basbousa-580eea.netlify.app/send-email";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    Object.keys(formData).forEach((name) => validateField(name, formData[name]));

    // Check if there are any errors
    if (Object.values(errors).every((error) => error === '')) {
      try {
        
        // If no errors, proceed with form submission
        setIsSubmitted(true);
        const response = await axios.post(apiUrl, formData);

        if (response.status === 200) {
          // Show success toast
          toast.success('Message sent successfully!', {
            position: toast.POSITION.TOP_CENTER,
            
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
          

          // You can add logic here to reset the form if needed
        } else {
          console.log('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className="error">{errors.name}</div>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="error">{errors.email}</div>
        </div>

        <div>
          <label htmlFor="phone">Phone no:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div className="error">{errors.phone}</div>
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="error">{errors.message}</div>
        </div>

        <button type="submit">Send</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
