import React, { createContext, useEffect, useState } from 'react';
import { getAllEmployees } from '@database/GET/getAllEmployees';

const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const { Employees } = await getAllEmployees();
            setEmployees(Employees);
        };
        fetchEmployees();
    }, []); 
    
    return (
        <EmployeesContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeesContext.Provider>
    );
};

export default EmployeesContext;
