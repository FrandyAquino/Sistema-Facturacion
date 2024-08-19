import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '@Layout/MainLayout'
import InputSearch from '@components/InputSearch'
import Buttons from '@components/Buttons'
import styles from '@styles/Inventory/Inventory.module.css'
import InventoryContext from '@context/InventoryContext'
import Table from '@pages/Inventory/components/Table'

function Inventory() {
    const navigate = useNavigate();
    const { filteredInventory, setSearchTerm } = useContext(InventoryContext);

    const handleAddInventory = () => {
        navigate('/inventory/addInventory');
    }
    return (
        <MainLayout>
            <div className={styles.inventoryContainer}>
                <InputSearch
                    placeholder="Buscar Inventario"
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