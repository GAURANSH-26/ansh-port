import "../Styles/contactcard.scss";
import React, { useState } from 'react';
import cimg from '../assets/contactpage.png';
import Swal from 'sweetalert2';

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.name) {
      valid = false;
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false;
      errors.email = 'Email address is invalid';
    }
    if (!formData.message) {
      valid = false;
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmittedData([...submittedData, formData]);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      Swal.fire({
        title: "Hurrey!",
        text: "Form Submitted Successfully.",
        icon: "success",
        customClass: {
          popup: 'custom-swalert-popup',
          title: 'custom-swalert-title',
          content: 'custom-swalert-text',
          confirmButton: 'custom-swalert-confirm',
        },
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All Input fields are required!",
        customClass: {
          popup: 'custom-swalert-popup',
          title: 'custom-swalert-title',
          content: 'custom-swalert-text',
          confirmButton: 'custom-swalert-confirm',
        },
      });
    }
  };

  return (
    <div className="book-container">
      <input type="checkbox" id="checkbox-cover" />
      <div className="book">
        <div className="cover">
          <img src={cimg} alt="" />
          <label htmlFor="checkbox-cover">Open Contact Form</label>
        </div>
        <div className="page" id="contact-page">
          <div className="front-page">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error-border' : ''}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error-border' : ''}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error-border' : ''}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="back-cover"></div>
      </div>
    </div>
  );
};

export default ContactCard;
