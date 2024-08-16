import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '@Layout/MainLayout'
import InputSearch from '@components/InputSearch'
import Buttons from '@components/Buttons'
import styles from '@styles/Inventory/Inventory.module.css'
import { useContext, useEffect, useState } from 'react'
import InventoryContext from '@context/InventoryContext'
import Table from '@pages/Inventory/components/Table'


function Inventory() {
    const navigate = useNavigate();
    const { inventory } = useContext(InventoryContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredInventory, setFilteredInventory] = useState(inventory);

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

    const handleAddInventory = () => {
        navigate('/inventory/addInventory');
    }
    return (
        <MainLayout>
            <div className={styles.inventoryContainer}>
                <InputSearch
                    placeholder="Buscar Inventario"
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <Buttons title="Añadir Inventario" onClick={handleAddInventory} />
            </div>
            <div className={styles.inventoryTable}>
                <h1>Lista de Inventario</h1>
                <Table data={filteredInventory} />
            </div>
        </MainLayout>
    )
}

export default Inventory