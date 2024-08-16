import React from 'react';
import DataTable from 'react-data-table-component';

function Table({ data }) {
    const columns = [
        {
            name: 'ID',
            selector: row => row.supplier_id,
            width: '100px',
        },
        {
            name: 'Nombre',
            selector: row => row.name,
        },
        {
            name: 'Compañía',
            selector: row => row.company,
        },
        {
            name: 'Correo Electrónico',
            selector: row => row.email,
        },
        {
            name: 'Teléfono',
            selector: row => row.phone,
        },
        {
            name: 'Saldo',
            selector: row => row.balance,
        },
        {
            name: 'Creado en',
            selector: row => row.created_at,
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
