import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useContext } from 'react';
import SalesContext from '@context/SalesContext';

function TopClientsChart() {
    const { sales } = useContext(SalesContext);

    const clientSales = sales.reduce((acc, sale) => {
        const clientName = sale.Clients.name;
        acc[clientName] = acc[clientName] ? acc[clientName] + sale.quantity : sale.quantity;
        return acc;
    }, {});

    const data = Object.entries(clientSales).map(([name, quantity]) => ({ name, quantity }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantity" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default TopClientsChart;
