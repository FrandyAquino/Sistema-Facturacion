import React, { createContext, useEffect, useState } from 'react';
import { getAllInventory } from '@database/GET/getAllInventory';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredInventory, setFilteredInventory] = useState(inventory);

    useEffect(() => {
        const fetchInventory = async () => {
            const { Inventory } = await getAllInventory();
            setInventory(Inventory);
        };
        fetchInventory();
    }, []);

    useEffect(() => {
        const results = inventory.filter(inventory =>
            inventory.barcode.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inventory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inventory.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inventory.cost.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            inventory.sale_price.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            inventory.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            inventory.created_at.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredInventory(results);
    }, [searchTerm, inventory]);

    return (
        <InventoryContext.Provider value={{ inventory, filteredInventory, setSearchTerm }}>
            {children}
        </InventoryContext.Provider>
    );
};

export default InventoryContext;
