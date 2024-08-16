import React from 'react'
import MainLayout from '@Layout/MainLayout';
import Forms from '@pages/Clients/components/Forms.jsx';

function addClient() {
    return (
        <div>
            <MainLayout>
                <Forms />
            </MainLayout>
        </div>
    )
}

export default addClient