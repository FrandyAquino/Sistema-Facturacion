import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@Layout/MainLayout';
import InputSearch from '@components/InputSearch';
import Buttons from '@components/Buttons';
import styles from '@styles/Clients/Client.module.css';
import Table from '@pages/Clients/components/Table.jsx';
import ClientsContext from '@context/ClientsContext';

function Clients() {
    const navigate = useNavigate();
    const { filteredClients, setSearchTerm } = useContext(ClientsContext);

    const handleAddClient = () => {
        navigate('/clients/addClient');
    };

    return (
        <div>
            <MainLayout>
                <div className={styles.clientsContainer}>
                    <InputSearch 
                        placeholder="Buscar Clientes"
                        setSearchTerm={setSearchTerm}
                    />
                    <Buttons title="Añadir clientes" onClick={handleAddClient}/>
                </div>
                <div className={styles.clientsTable}>
                    <h1>Lista de Clientes</h1>
                    <Table data={filteredClients} />
                </div>
            </MainLayout>
        </div>
    );
}

export default Clients;
