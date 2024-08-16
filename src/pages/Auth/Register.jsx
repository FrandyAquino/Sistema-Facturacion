import React from 'react';
import { useState } from 'react';
import { supabase } from '@database/databaseAuth';
import styles from '@styles/components/Register.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await supabase.auth.signUp({
                email,
                password
            });
            console.log(result);
        } catch (error) {
            console.log('Error: ', error.message);
        }
    };

    const handleLogin = () => {
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
        </div>
    );
};

export default Register;
