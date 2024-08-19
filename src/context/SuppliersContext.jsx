import React, { createContext, useEffect, useState } from 'react';
import { getAllSuppliers } from '@database/GET/getAllSuppliers';

const SuppliersContext = createContext();

export const SuppliersProvider = ({ children }) => {
    const [suppliers, setSuppliers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSuppliers, setFilteredSuppliers] = useState(suppliers);

    useEffect(() => {
        const fetchSuppliers = async () => {
            const { Suppliers } = await getAllSuppliers();
            setSuppliers(Suppliers);
        };
        fetchSuppliers();
    }, []);

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

    return (
        <SuppliersContext.Provider value={{ suppliers, filteredSuppliers, setSearchTerm }}>
            {children}
        </SuppliersContext.Provider>
    );
};

export default SuppliersContext;
