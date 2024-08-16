import React, { useState } from 'react';
import styles from '@styles/components/Forms.module.css';
import { insertClients } from '@database/POST/insertClients'; 

function Forms() {
    const [formData, setFormData] = useState({
        nombre: '',
        compania: '',
        correo: '',
        telefono: '',
        saldo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const clientData = {
            name: formData.nombre,
            company: formData.compania,
            email: formData.correo,
            phone: formData.telefono,
            balance: formData.saldo
        };
        
        await insertClients(clientData);
        setFormData({
            nombre: '',
            compania: '',
            correo: '',
            telefono: '',
            saldo: ''
        });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="nombre" className={styles.label}>Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                className={styles.input}
                value={formData.nombre}
                onChange={handleChange}
            />

            <label htmlFor="compania" className={styles.label}>Compañía:</label>
            <input
                type="text"
                id="compania"
                name="compania"
                className={styles.input}
                value={formData.compania}
                onChange={handleChange}
            />

            <label htmlFor="correo" className={styles.label}>Correo:</label>
            <input
                type="email"
                id="correo"
                name="correo"
                className={styles.input}
                value={formData.correo}
                onChange={handleChange}
            />

            <label htmlFor="telefono" className={styles.label}>Teléfono:</label>
            <input
                type="tel"
                id="telefono"
                name="telefono"
                className={styles.input}
                value={formData.telefono}
                onChange={handleChange}
            />

            <label htmlFor="saldo" className={styles.label}>Saldo:</label>
            <input
                type="number"
                id="saldo"
                name="saldo"
                className={styles.input}
                value={formData.saldo}
                onChange={handleChange}
            />

            <button type="submit" className={styles.button}>Agregar Cliente</button>
        </form>
    );
}

export default Forms;
