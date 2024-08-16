import React, { useState, useEffect, useContext } from 'react';
import { supabase } from '@database/databaseAuth.ts'; 
import ClientsContext from '@context/ClientsContext';
import InventoryContext from '@context/InventoryContext';
import styles from '@styles/components/Forms.module.css';
import MainLayout from '@Layout/MainLayout';

function SalesForm() {
    const { clients } = useContext(ClientsContext);
    const { inventory } = useContext(InventoryContext);
    const [selectedClient, setSelectedClient] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        console.log('Inventory Data:', inventory); 
        console.log('Selected Product:', selectedProduct); 
        const product = inventory.find(item => item.item_id === Number(selectedProduct));
        console.log('Product Details:', product); 
        if (product) {
            setTotalPrice(product.sale_price * quantity);
        } else {
            setTotalPrice(0);
        }
    }, [selectedProduct, quantity, inventory]);

    const handleProductChange = (e) => {
        const value = e.target.value;
        console.log('Selected Product Value:', value); 
        setSelectedProduct(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedClient || !selectedProduct || quantity <= 0) {
            alert('Por favor, complete todos los campos correctamente.');
            return;
        }

        console.log('Total Price:', totalPrice); 

        const { error } = await supabase
            .from('Sales')
            .insert([{ client_id: selectedClient, item_id: selectedProduct, quantity, total_price: totalPrice }]);

        if (error) {
            console.error('Error inserting sale:', error);
            alert('Ocurrió un error al registrar la venta. Por favor, inténtelo de nuevo.');
        } else {
            alert('¡Venta registrada exitosamente!');
            setSelectedClient('');
            setSelectedProduct('');
            setQuantity(1);
            setTotalPrice(0);
        }
    };

    return (
        <MainLayout>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="client">Cliente</label>
                        <select
                            id="client"
                            value={selectedClient}
                            onChange={(e) => setSelectedClient(e.target.value)}
                            className={styles.input}
                            required
                        >
                            <option value="">Seleccione un cliente</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>{client.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="product">Producto</label>
                        <select
                            id="product"
                            value={selectedProduct}
                            onChange={handleProductChange}
                            className={styles.input}
                            required
                        >
                            <option value="">Seleccione un producto</option>
                            {inventory.map(item => (
                                <option key={item.item_id} value={item.item_id}>{item.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="quantity">Cantidad</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="totalPrice">Precio Total</label>
                        <input
                            type="text"
                            id="totalPrice"
                            value={`$${totalPrice.toFixed(2)}`}
                            readOnly
                            className={styles.input}
                        />
                    </div>

                    <button type="submit" className={styles.button}>Registrar Venta</button>
                </form>
            </div>
        </MainLayout>
    );
}

export default SalesForm;
