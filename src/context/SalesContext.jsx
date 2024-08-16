import React, { createContext, useEffect, useState } from 'react';
import { getAllSales } from '@database/GET/getAllSales';

const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            const { Sales } = await getAllSales();
            console.log('Sales Data:', Sales); 
            setSales(Sales);
        };
        fetchSales();
    }, []);
    
    
    return (
        <SalesContext.Provider value={{ sales, setSales }}>
            {children}
        </SalesContext.Provider>
    );
};

export default SalesContext;
