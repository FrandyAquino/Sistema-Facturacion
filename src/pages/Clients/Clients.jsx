import React, { useState, useContext, useEffect } from 'react';
import MainLayout from '@Layout/MainLayout';
import InputSearch from '@components/InputSearch';
import Buttons from '@components/Buttons';
import styles from '@styles/Clients/Client.module.css';
import Table from '@pages/Clients/components/Table.jsx';
import { useNavigate } from 'react-router-dom';
import ClientsContext from '@context/ClientsContext';

function Clients() {
    const navigate = useNavigate();
    const { clients } = useContext(ClientsContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredClients, setFilteredClients] = useState(clients);

    useEffect(() => {
        const results = clients.filter(client =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.phone.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredClients(results);
    }, [searchTerm, clients]);

    const handleAddClient = () => {
        navigate('/clients/addClient');
    };

    return (
        <div>
            <MainLayout>
                <div className={styles.clientsContainer}>
                    <InputSearch 
                        placeholder="Buscar Clientes"
                        searchTerm={searchTerm}
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
