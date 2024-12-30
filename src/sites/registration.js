import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../imagecustom/footer";
import "./RegistrationForm.css"; // Custom CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      // Here, you can perform actions like sending data to the server
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="registration-container">
        <div className="map-container">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3018027247053!2d78.39954787462925!3d17.49310079975219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91625d9cd1ad%3A0x4455387ad24a675d!2s10000coders!5e0!3m2!1sen!2sin!4v1722541042046!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form-container">
          <h2 className="mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name && "is-invalid"}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${errors.password && "is-invalid"}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className={`form-control ${
                  errors.confirmPassword && "is-invalid"
                }`}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationForm;
