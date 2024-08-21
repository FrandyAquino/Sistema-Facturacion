import React from 'react';
import DataTable from 'react-data-table-component';
import ReactDOMServer from 'react-dom/server';
import Receipt from '@components/Receipt';

function Table({ data }) {
    const handleViewReceipt = (sale) => {
        const html = `
            <html>
                <head>
                    <title>Receipt</title>
                    <style>
                        body {
                            margin: 0;
                        }
                    </style>
                </head>
                <body>
                    <div id="invoiceContent">
                        ${ReactDOMServer.renderToString(<Receipt sale={sale} />)}
                    </div>
                </body>
            </html>
        `;

        const iframe = document.createElement('iframe');
        iframe.setAttribute('style', 'position:absolute;visibility:hidden;height:0;width:0;');
        document.body.appendChild(iframe);
        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();

        iframe.contentWindow.print();

        setTimeout(() => {
            document.body.removeChild(iframe);
        }, 100);
    };

    const columns = [
        {
            name: 'ID',
            selector: row => row.sale_id,
        },
        {
            name: 'Nombre del Cliente',
            selector: row => row.Clients.name,
        },
        {
            name: 'Nombre del Producto',
            selector: row => row.Inventory.name,
        },
        {
            name: 'Cantidad',
            selector: row => row.quantity,
        },
        {
            name: 'Costo',
            selector: row => `$${row.total_price.toFixed(2)}`,
        },
        {
            name: 'Creado en',
            selector: row => new Date(row.created_at).toLocaleDateString(),
        },
        {
            name: 'Acción',
            cell: row => (
                <button onClick={() => handleViewReceipt(row)} className="btn btn-primary">
                    Ver Recibo
                </button>
            ),
        },
    ];

    const customStyles = {
        header: {
            style: {
                minHeight: '56px',
            },
        },
        headRow: {
            style: {
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderTopColor: '#e3e3e3',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1px',
                borderLeftColor: '#e3e3e3',
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: '#e3e3e3',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
            },
        },
        headCells: {
            style: {
                '&:not(:last-of-type)': {},
                fontSize: '13px',
                color: '#555555',
            },
        },
        rows: {
            style: {
                minHeight: '48px',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                borderBottomColor: '#e3e3e3',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1px',
                borderLeftColor: '#e3e3e3',
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: '#e3e3e3',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
            },
        },
        pagination: {
            style: {
                borderTop: 'none',
            },
        },
    };

    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[3, 4, 5, 6, 7]}
                highlightOnHover
                selectableRows
                noHeader
            />
        </div>
    );
}

export default Table;
