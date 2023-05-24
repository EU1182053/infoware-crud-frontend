import React, { useEffect, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import '../App.css'
import Navbar from './Navbar';
const EmployeeContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [primaryEmergencyContact, setPrimaryEmergencyContact] = useState('');
  const [primaryEmergencyPhoneNumber, setPrimaryEmergencyPhoneNumber] = useState('');
  const [primaryEmergencyRelationship, setPrimaryEmergencyRelationship] = useState('');
  const [secondaryEmergencyContact, setSecondaryEmergencyContact] = useState('');
  const [secondaryEmergencyPhoneNumber, setSecondaryEmergencyPhoneNumber] = useState('');
  const [secondaryEmergencyRelationship, setSecondaryEmergencyRelationship] = useState('');


  const statesOfIndia = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry'
  ];

  // submit data to create employee
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create an object with the form data
    const employeeData = {
      fullName,
      jobTitle,
      phoneNumber,
      email,
      address,
      city,
      state,

      primaryEmergencyContact,
      primaryEmergencyPhoneNumber,
      primaryEmergencyRelationship,
      secondaryEmergencyContact,
      secondaryEmergencyPhoneNumber,
      secondaryEmergencyRelationship

    };
    console.log(employeeData)
    // Send the form data to the backend server
    fetch('http://localhost:8000/api/v1/employee/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
        // Reset form fields
        setFullName('');
        setJobTitle('');
        setPhoneNumber('');
        setEmail('');
        setAddress('');
        setCity('');
        setState('');
        setPrimaryEmergencyContact('');
        setPrimaryEmergencyPhoneNumber('');
        setPrimaryEmergencyRelationship('');
        setSecondaryEmergencyContact('');
        setSecondaryEmergencyPhoneNumber('');
        setSecondaryEmergencyRelationship('');
      })
      .catch()
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <Navbar />
      <form className='contact-form' onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input className="input-field" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </label>
        <br />
        <label>
          Job Title:
          <input className="input-field" type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
        </label>
        <br />
        <label>
          Phone Number:
          <input className="input-field" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input className="input-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <br />
        <label>
          City:
          <input className="input-field" type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </label>
        <br />
        <div className="employee-form">
          <label className="form-label">
            State:
            <select className="form-select" value={state} onChange={handleStateChange}>
              <option value="">Select State</option>
              {statesOfIndia.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
        </div>
        <br />
        <label>
          Primary Emergency Contact:
          <input className="input-field" type="text" value={primaryEmergencyContact} onChange={(e) => setPrimaryEmergencyContact(e.target.value)} required />
        </label>
        <br />
        <label>
          Primary Emergency Contact Phone Number:
          <input className="input-field" type="tel" value={primaryEmergencyPhoneNumber} onChange={(e) => setPrimaryEmergencyPhoneNumber(e.target.value)} required />
        </label>
        <br />
        <label>
          Primary Emergency Contact Relationship:
          <input className="input-field" type="text" value={primaryEmergencyRelationship} onChange={(e) => setPrimaryEmergencyRelationship(e.target.value)} required />
        </label>
        <br />
        <label>
          Secondary Emergency Contact:
          <input className="input-field" type="text" value={secondaryEmergencyContact} onChange={(e) => setSecondaryEmergencyContact(e.target.value)} required />
        </label>
        <br />
        <label>
          Secondary Emergency Contact Phone Number:
          <input className="input-field" type="tel" value={secondaryEmergencyPhoneNumber} onChange={(e) => setSecondaryEmergencyPhoneNumber(e.target.value)} required />
        </label>
        <br />
        <label>
          Secondary Emergency Contact Relationship:
          <input className="input-field" type="text" value={secondaryEmergencyRelationship} onChange={(e) => setSecondaryEmergencyRelationship(e.target.value)} required />
        </label>
        <br />
        <button className="submit-button" type="submit">Submit</button>

      </form>
    </>
  );
};

export default EmployeeContactForm;
