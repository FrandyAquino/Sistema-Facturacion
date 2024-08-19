import React, { useContext } from 'react'
import MainLayout from '@Layout/MainLayout';
import styles from '@styles/Suppliers/Suppliers.module.css';
import InputSearch from '@components/InputSearch';
import Buttons from '@components/Buttons';
import Table from '@pages/Suppliers/components/Table';
import { useNavigate } from 'react-router-dom';
import SuppliersContext from '@context/SuppliersContext';

function Suppliers() {
    const navigate = useNavigate();
    const { filteredSuppliers, setSearchTerm } = useContext(SuppliersContext);

    const handleAddSuppliers = () => {
        navigate('/suppliers/addSuppliers');
    }

    return (
        <MainLayout>
            <div className={styles.suppliersContainer}>
                <InputSearch
                    placeholder="Buscar Proveedores"
                    setSearchTerm={setSearchTerm}
                />
                <Buttons title="Añadir Proveedores" onClick={handleAddSuppliers} />
            </div>
            <div className={styles.suppliersTable}>
                <h1>Lista de Suplidores</h1>
                <Table data={filteredSuppliers} />
            </div>
        </MainLayout>
    )
}


export default Suppliers