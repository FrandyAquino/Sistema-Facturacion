import React, { useState } from 'react';
import styles from '@styles/components/Forms.module.css';
import { insertInventory } from '@database/POST/insertInventory';
import { updateInventory } from '@database/UPDATE/updateInvetory';
import { supabase } from '@database/databaseAuth';

function InventoryForm() {
    const [formData, setFormData] = useState({
        barcode: '',
        name: '',
        category: '',
        cost: '',
        sale_price: '',
        quantity: '',
        created_at: ''
    });

    const [isUpdating, setIsUpdating] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBarcodeBlur = async () => {
        if (formData.barcode) {
            const { data: existingProduct, error } = await supabase
                .from('Inventory')
                .select('*')
                .eq('barcode', formData.barcode)
                .single();

            if (existingProduct) {
                setFormData({
                    barcode: existingProduct.barcode,
                    name: existingProduct.name,
                    category: existingProduct.category,
                    cost: existingProduct.cost.toString(),
                    sale_price: existingProduct.sale_price.toString(),
                    quantity: existingProduct.quantity.toString(),
                    created_at: existingProduct.created_at
                });
                setIsUpdating(true);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isUpdating) {
            const updatedData = {
                name: formData.name,
                category: formData.category,
                cost: parseFloat(formData.cost),
                sale_price: parseFloat(formData.sale_price),
                quantity: parseInt(formData.quantity, 10)
            };

            console.log('Datos enviados para actualizar:', formData.barcode, updatedData);

            await updateInventory(formData.barcode, updatedData);

        } else {
            const inventoryData = {
                barcode: formData.barcode,
                name: formData.name,
                category: formData.category,
                cost: parseFloat(formData.cost),
                sale_price: parseFloat(formData.sale_price),
                quantity: parseInt(formData.quantity, 10),
                created_at: formData.created_at
            };

            console.log('Datos enviados para insertar:', inventoryData);

            await insertInventory(inventoryData);
        }

        setFormData({
            barcode: '',
            name: '',
            category: '',
            cost: '',
            sale_price: '',
            quantity: '',
            created_at: ''
        });
        setIsUpdating(false);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="barcode" className={styles.label}>Código de Barras:</label>
            <input
                type="text"
                id="barcode"
                name="barcode"
                className={styles.input}
                value={formData.barcode}
                onChange={handleChange}
                onBlur={handleBarcodeBlur}
                required
            />

            <label htmlFor="name" className={styles.label}>Nombre:</label>
            <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
                required={!isUpdating}
                disabled={isUpdating} 
            />

            <label htmlFor="category" className={styles.label}>Categoría:</label>
            <input
                type="text"
                id="category"
                name="category"
                className={styles.input}
                value={formData.category}
                onChange={handleChange}
                required={!isUpdating}
                disabled={isUpdating}
            />

            <label htmlFor="cost" className={styles.label}>Costo:</label>
            <input
                type="number"
                step="0.01"
                id="cost"
                name="cost"
                className={styles.input}
                value={formData.cost}
                onChange={handleChange}
                required={!isUpdating}
                disabled={isUpdating}
            />

            <label htmlFor="sale_price" className={styles.label}>Precio de Venta:</label>
            <input
                type="number"
                step="0.01"
                id="sale_price"
                name="sale_price"
                className={styles.input}
                value={formData.sale_price}
                onChange={handleChange}
                required={!isUpdating}
                disabled={isUpdating}
            />

            <label htmlFor="quantity" className={styles.label}>Cantidad:</label>
            <input
                type="number"
                id="quantity"
                name="quantity"
                className={styles.input}
                value={formData.quantity}
                onChange={handleChange}
                required
            />

            <label htmlFor="created_at" className={styles.label}>Fecha de Creación:</label>
            <input
                type="date"
                id="created_at"
                name="created_at"
                className={styles.input}
                value={formData.created_at}
                onChange={handleChange}
                required={!isUpdating}
                disabled={isUpdating}
            />

            <button type="submit" className={styles.button}>
                {isUpdating ? 'Actualizar Inventario' : 'Agregar Inventario'}
            </button>
        </form>
    );
}

export default InventoryForm;
