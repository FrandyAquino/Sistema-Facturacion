import React, { useContext } from 'react'
import MainLayout from '@Layout/MainLayout';
import styles from '@styles/Employees/Employees.module.css';
import InputSearch from '@components/InputSearch';
import Buttons from '@components/Buttons';
import Table from '@pages/Employees/components/Table';
import { useNavigate } from 'react-router-dom';
import EmployeesContext from '@context/EmployeesContext';

function Employees() {
    const navigate = useNavigate();
    const { filteredEmployees, setSearchTerm } = useContext(EmployeesContext);



    const handleAddEmployees = () => {
        navigate('/employees/addEmployees');
    }

    return (
        <MainLayout>
            <div className={styles.employeesContainer}>
                <InputSearch
                    placeholder="Buscar Empleados"
                    setSearchTerm={setSearchTerm}
                />
                <Buttons title="Añadir Empleados" onClick={handleAddEmployees} />
            </div>
            <div className={styles.employeesTable}>
                <h1>Lista de Empleados</h1>
                <Table data={filteredEmployees} />
            </div>
        </MainLayout>
    )
}

export default Employees