import React, {useContext, useEffect, useState} from 'react'
import MainLayout from '@Layout/MainLayout';
import styles from '@styles/Suppliers/Suppliers.module.css';
import InputSearch from '@components/InputSearch';
import Buttons from '@components/Buttons';
import Table from '@pages/Suppliers/components/Table';
import { useNavigate } from 'react-router-dom';
import SuppliersContext from '@context/SuppliersContext';

function Suppliers() {
    const navigate = useNavigate();
    const { suppliers } = useContext(SuppliersContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSuppliers, setFilteredSuppliers] = useState(suppliers);

    useEffect(() => {
        const results = suppliers.filter(supplier =>
            supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            supplier.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            supplier.balance.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            supplier.created_at.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            supplier.phone.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSuppliers(results);
    }, [searchTerm, suppliers]);

    const handleAddSuppliers = () => {
        navigate('/suppliers/addSuppliers');
    }

    return (
        <MainLayout>
            <div className={styles.suppliersContainer}>
                <InputSearch 
                placeholder="Buscar Proveedores"
                searchTerm={searchTerm}
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