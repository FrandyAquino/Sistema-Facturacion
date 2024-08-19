import React, { createContext, useState, useEffect } from 'react';
import { getAllClients } from '@database/GET/getAllClients';

const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredClients, setFilteredClients] = useState(clients);

    useEffect(() => {
        const fetchClients = async () => {
            const { Clients } = await getAllClients();
            setClients(Clients);
        };
        fetchClients();
    }, []);

    
    useEffect(() => {
        const results = clients.filter(client =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.phone.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredClients(results);
    }, [searchTerm, clients]);

    return (
        <ClientsContext.Provider value={{ clients, filteredClients, setSearchTerm }}>
            {children}
        </ClientsContext.Provider>
    );
};

export default ClientsContext;
