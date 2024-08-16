import React, {useContext, useEffect, useState} from 'react'
import MainLayout from '@Layout/MainLayout';
import styles from '@styles/Employees/Employees.module.css';
import InputSearch from '@components/InputSearch';
import Buttons from '@components/Buttons';
import Table from '@pages/Employees/components/Table';
import { useNavigate } from 'react-router-dom';
import EmployeesContext from '@context/EmployeesContext';

function Employees() {
    const navigate = useNavigate();
    const { employees } = useContext(EmployeesContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState(employees);

    useEffect(() => {
        const results = employees.filter(employee =>
            employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.created_at.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEmployees(results);
    }, [searchTerm, employees]);

    const handleAddEmployees = () => {
        navigate('/employees/addEmployees');
    }

    return (
        <MainLayout>
            <div className={styles.employeesContainer}>
                <InputSearch 
                placeholder="Buscar Empleados"
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                />
                <Buttons title="Añadir Empleados" onClick={handleAddEmployees} />
            </div>
            <div className={styles.employeesTable}>
                <h1>Lista de Empleados</h1>
                <Table data={filteredEmployees}/>
            </div>
        </MainLayout>
    )
}

export default Employees