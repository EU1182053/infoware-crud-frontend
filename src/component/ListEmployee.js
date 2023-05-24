import React, { useEffect, useState } from 'react'
import PerformUpdate from './PerformUpdate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar';



const ListEmployee = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    //get all employee list
    const fetchData = async () => {
        try {
            await axios.get(`http://localhost:8000/api/v1/employee/getAll?page=${page}`)
                .then(d => {
                    console.log(d.data['data'])
                    setTotalPages(d.data.totalPages);
                    setEmployeeData(d.data['data']);
                })
                .catch(e => {
                    console.log({ "Error fetching employee data": e })
                })

        } catch (error) {
            console.error(`${process.env.REACT_APP_BACKEND}/getAll Error fetching employee data:${error}`,);
        }

    }

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const updateWindow = () => {

    }

    // delete employee by id
    const handleDelete = async (employeeId) => {
        await axios.delete(`http://localhost:8000/api/v1/employee/delete/${employeeId}`)
            .then(d => {
                window.location.reload()
            })
            .catch()
    }
    useEffect(() => {

        fetchData()

    }, [page])

    return (
        <>
            <Navbar />
            <div className="employee-container">
                <h2>Employee Details</h2>
                {employeeData.map((employee) => (
                    <div className="employee-card" key={employee.id}>
                        <p>ID: {employee.id}</p>
                        <p>Full Name: {employee.full_name}</p>
                        <p>Job Title: {employee.job_title}</p>
                        <p>Phone Number: {employee.phone_number}</p>
                        <p>CITY: {employee.city}</p>
                        <p>Primary Emergency Contact: {employee.primary_emergency_contact}</p>
                        <p>Primary Emergency Phone Number: {employee.primary_emergency_phone_number}</p>
                        <p>Primary Emergency Relationship: {employee.primary_emergency_relationship}</p>
                        <p>Secondary Emergency Contact: {employee.secondary_emergency_contact}</p>
                        <p>Secondary Emergency Phone Number: {employee.secondary_emergency_phone_number}</p>
                        <p>Secondary Emergency Relationship: {employee.secondary_emergency_relationship}</p>
                        <Link params={{ employeeId: employee.id }} to={`/updateEmployee/${employee.id}`}>
                            <button className="edit-button">EDIT</button>
                        </Link>
                        <button className="delete-button" onClick={() => handleDelete(employee.id)}>
                            Delete
                        </button>
                    </div>
                ))}
                <div className="pagination">
                    <button
                        className="pagination-button"
                        onClick={handlePreviousPage}
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <span className="page-info">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        className="pagination-button"
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListEmployee