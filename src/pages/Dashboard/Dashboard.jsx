import React, { useContext } from 'react';
import MainLayout from '@Layout/MainLayout';
import Cards from '@pages/Dashboard/components/Cards.jsx';
import styles from '@styles/Dashboard/Dashboard.module.css';
import ClientsContext from '@context/ClientsContext';
import InventoryContext from '@context/InventoryContext';
import SuppliersContext from '@context/SuppliersContext';
import SalesContext from '@context/SalesContext';
import TopClientsChart from '@pages/Reports/TopClientsChart';
import TopProductsChart from '@pages/Reports/TopProductsChart';
import SalesByDayChart from '@pages/Reports/SalesByDayChart';

function Dashboard() {
    const { clients } = useContext(ClientsContext);
    const { inventory } = useContext(InventoryContext);
    const { suppliers } = useContext(SuppliersContext);
    const { sales } = useContext(SalesContext);

    const totalSales = `$${sales.reduce((acc, sale) => acc + sale.total_price, 0).toFixed(2)}`;

    return (
        <MainLayout>
            <div className={styles.cardContainer}>
                <Cards total={totalSales} title="Total ventas" imgUrl="https://www.tpc.nl/en/content/items/1812/media/d83a46063d5a.png"/>
                <Cards total={inventory.length} title="Total Productos" imgUrl="https://www.tpc.nl/en/content/items/1813/media/b9d0dcdf616a.png" />
                <Cards total={clients.length} title="Total Clientes" imgUrl="https://www.tpc.nl/en/content/items/1910/media/e4e1373b7cd9.png"/>
                <Cards total={suppliers.length} title="Total Proveedores" imgUrl="https://www.tpc.nl/en/content/items/1812/media/dcc032479881.png"/>
            </div>
            <div className={styles.reportsContainer}>
                <div className={styles.chartsContainer}>
                    <div className={`${styles.chartReports} ${styles.topSales}`}>
                        <h2>Top Ventas</h2>
                        <SalesByDayChart />
                    </div>
                    <div className={`${styles.chartReports} ${styles.topClients}`}>
                        <h2>Top Clientes</h2>
                        <TopClientsChart />
                    </div>
                    <div className={`${styles.chartReports} ${styles.topProducts}`}>
                        <h2>Top Productos</h2>
                        <TopProductsChart />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Dashboard;
