import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import SalesContext from '@context/SalesContext'
import MainLayout from '@Layout/MainLayout';
import Table from '@pages/Sales/components/Table.jsx';
import InputSearch from '@components/InputSearch';
import Buttons from '@components/Buttons';
import styles from '@styles/Sales/Sales.module.css';

function Sales() {
  const navigate = useNavigate();
  const { sales } = useContext(SalesContext);

  const handleAddVentas = () => {
    navigate('/sales/addSales');
  }

  return (
    <MainLayout>
      <div className={styles.salesContainer}>
        <InputSearch
          placeholder="NO SE IMPLEMENTÓ"
        />
        <Buttons title="Registrar Venta" onClick={handleAddVentas} />
      </div>
      <div className={styles.salesTable}>
        <h1>Lista de Ventas</h1>
        <Table data={sales} />
      </div>
    </MainLayout>
  )
}

export default Sales