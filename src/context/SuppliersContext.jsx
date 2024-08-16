import React, { createContext, useEffect, useState } from 'react';
import { getAllSuppliers } from '@database/GET/getAllSuppliers';

const SuppliersContext = createContext();

export const SuppliersProvider = ({ children }) => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const fetchSuppliers = async () => {
            const { Suppliers } = await getAllSuppliers();
            setSuppliers(Suppliers);
        };
        fetchSuppliers();
    }, []); 
    
    return (
        <SuppliersContext.Provider value={{ suppliers, setSuppliers }}>
            {children}
        </SuppliersContext.Provider>
    );
};

export default SuppliersContext;
