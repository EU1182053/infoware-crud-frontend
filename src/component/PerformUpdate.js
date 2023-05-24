import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams } from "react-router-dom";
import axios from 'axios'
import Navbar from './Navbar';
const PerformUpdate = () => {

    const { employeeId } = useParams();
    const [id, setId] = useState('')
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

    useEffect(() => {
        fetchEmployeeById()


    }, [])

    const handleUpdate = async () => {


        try {
            console.log(employeeData)
            const response = await axios.put(`http://localhost:8000/api/v1/employee/update/${employeeId}`, employeeData);

            if (response.status === 200) {
                //we will do it later
                window.location.reload();
            }
        } catch (error) {
            console.error('Error updating employee:', error);
            // Handle error or display error message
        }

    }

    const fetchEmployeeById = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/employee/getById/${employeeId}`);
            if (response.ok) {
                const data = await response.json();
                setFullName(data.results[0]['full_name']);
                setJobTitle(data.results[0]['job_title']);
                setPhoneNumber(data.results[0]['phone_number']);
                setEmail(data.results[0]['email']);
                setAddress(data.results[0]['address']);
                setCity(data.results[0]['city']);
                setState(data.results[0]['state']);
                setPrimaryEmergencyContact(data.results[0]['primary_emergency_contact']);
                setPrimaryEmergencyPhoneNumber(data.results[0]['primary_emergency_phone_number']);
                setPrimaryEmergencyRelationship(data.results[0]['primary_emergency_relationship']);
                setSecondaryEmergencyContact(data.results[0]['secondary_emergency_contact']);
                setSecondaryEmergencyPhoneNumber(data.results[0]['secondary_emergency_phone_number']);
                setSecondaryEmergencyRelationship(data.results[0]['secondary_emergency_relationship']);

            } else {
                throw new Error('Error fetching employee data');
            }
        } catch (error) {
            console.error(`${process.env.REACT_APP_BACKEND}/getAll Error fetching employee data:${error}`,);
        }

    }

    return (
        <>
        <Navbar/>
            <br />
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
                <textarea className="input-field" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <br />
            <label>
                City:
                <input className="input-field" type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
            </label>
            <br />
            <label>
                State:
                <input className="input-field" type="text" value={state} onChange={(e) => setState(e.target.value)} required />
            </label>
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
            <Link to="/listEmployee">
                <button className="submit-button" type="button" onClick={() => handleUpdate()}>Update</button>
            </Link>
        </>

    )
}

export default PerformUpdate