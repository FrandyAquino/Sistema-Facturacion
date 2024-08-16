import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useContext } from 'react';
import SalesContext from '@context/SalesContext';

function SalesByDayChart() {
    const { sales } = useContext(SalesContext);

    const salesByDay = sales.reduce((acc, sale) => {
        const date = new Date(sale.created_at).toLocaleDateString();
        acc[date] = acc[date] ? acc[date] + sale.total_price : sale.total_price;
        return acc;
    }, {});

    const data = Object.entries(salesByDay).map(([date, total_price]) => ({ date, total_price }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total_price" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default SalesByDayChart;
