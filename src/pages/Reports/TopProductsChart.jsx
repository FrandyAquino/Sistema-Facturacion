import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useContext } from 'react';
import SalesContext from '@context/SalesContext';

function TopProductsChart() {
    const { sales } = useContext(SalesContext);

    const productSales = sales.reduce((acc, sale) => {
        const productName = sale.Inventory.name;
        acc[productName] = acc[productName] ? acc[productName] + sale.quantity : sale.quantity;
        return acc;
    }, {});

    const data = Object.entries(productSales).map(([name, quantity]) => ({ name, quantity }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantity" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default TopProductsChart;
