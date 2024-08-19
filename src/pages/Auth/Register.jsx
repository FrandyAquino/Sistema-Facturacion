import React, { useState } from 'react';
import { supabase } from '@database/databaseAuth';
import styles from '@styles/components/Register.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase.auth.signUp({
                email,
                password
            });
            if (!error) {
                setShowModal(true);
            } else {
                console.log('Error: ', error.message);
            }
        } catch (error) {
            console.log('Error: ', error.message);
        }
    };

    const handleLogin = () => {
        navigate('/login');
    };

    const closeModal = () => {
        setShowModal(false);
        navigate('/login'); 
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Register</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    className={styles.input} 
                    required 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    className={styles.input} 
                    required 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className={styles.button}>Register</button>
                <p className={styles.pLogin} onClick={handleLogin}>¿Ya tienes una cuenta? Inicia Sesión</p>
            </form>

            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h3>¡Registro Exitoso!</h3>
                        <p>Por favor, confirma tu email revisando tu bandeja de entrada.</p>
                        <button className={styles.modalButton} onClick={closeModal}>Aceptar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
