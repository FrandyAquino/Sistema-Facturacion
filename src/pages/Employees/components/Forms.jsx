import React, { useState } from 'react';
import styles from '@styles/components/Forms.module.css';
import { insertEmployees } from '@database/POST/insertEmployees'; 

function Forms() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        creadoEn: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employeeData = {
            name: formData.nombre,
            email: formData.correo,
            phone: formData.telefono,
            created_at: formData.creadoEn
        };
        
        await insertEmployees(employeeData);
        setFormData({
            nombre: '',
            correo: '',
            telefono: '',
            creadoEn: ''
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

            <label htmlFor="correo" className={styles.label}>Correo Electrónico:</label>
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

            <label htmlFor="creadoEn" className={styles.label}>Creado en:</label>
            <input
                type="datetime-local"
                id="creadoEn"
                name="creadoEn"
                className={styles.input}
                value={formData.creadoEn}
                onChange={handleChange}
            />

            <button type="submit" className={styles.button}>Agregar Empleado</button>
        </form>
    );
}

export default Forms;
