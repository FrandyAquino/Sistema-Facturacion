import React, { createContext, useState, useEffect } from 'react';
import { getAllClients } from '@database/GET/getAllClients';

const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            const { Clients } = await getAllClients();
            setClients(Clients);
        };
        fetchClients();
    }, []);

    return (
        <ClientsContext.Provider value={{ clients, setClients }}>
            {children}
        </ClientsContext.Provider>
    );
};

export default ClientsContext;
