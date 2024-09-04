import React, { createContext, useEffect, useState } from 'react';
import { getAllEmployees } from '@database/GET/getAllEmployees';

const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState(employees);

    useEffect(() => {
        const fetchEmployees = async () => {
            const { Employees } = await getAllEmployees();
            setEmployees(Employees);
        };
        fetchEmployees();
    }, []);
    
    useEffect(() => {
        const results = employees.filter(employee =>
            employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.created_at.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEmployees(results);
    }, [searchTerm, employees]);

    return (
        <EmployeesContext.Provider value={{ employees, filteredEmployees, setSearchTerm }}>
            {children}
        </EmployeesContext.Provider>
    );
};

export default EmployeesContext;

