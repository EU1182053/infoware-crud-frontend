import React from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import EmployeeContactForm from './component/EmployeeContactForm'
import UpdateEmployee from './component/ListEmployee'
import ListEmployee from './component/ListEmployee'
import PerformUpdate from './component/PerformUpdate'


const Router = () => { 
    const { employeeId } = useParams()
 
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<EmployeeContactForm />} ></Route>
                <Route path='/listEmployee' element={<ListEmployee />} ></Route>
                <Route path='/updateEmployee/:employeeId' element={<PerformUpdate />} ></Route>
            </Routes>


        </BrowserRouter>
    )
}

export default Router
