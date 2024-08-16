import React, { createContext, useEffect, useState } from 'react';
import { getAllInventory } from '@database/GET/getAllInventory';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            const { Inventory } = await getAllInventory();
            setInventory(Inventory);
        };
        fetchInventory();
    }, []); 
    
    return (
        <InventoryContext.Provider value={{ inventory, setInventory }}>
            {children}
        </InventoryContext.Provider>
    );
};

export default InventoryContext;
