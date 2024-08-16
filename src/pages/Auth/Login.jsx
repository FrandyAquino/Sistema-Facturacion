import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@database/databaseAuth';
import styles from '@styles/components/Login.module.css';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if (!session) {
                navigate('/login');
            } else {
                navigate('/');
            }
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await supabase.auth.signInWithPassword({
                email,
                password
            });
        } catch (error) {
            console.log('Error: ', error.message);
        }
    };

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Login</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className={styles.input}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className={styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <button type="submit" className={styles.button}>Login</button>
                <p className={styles.pRegister} onClick={handleRegister}>¿No tienes Cuenta? Registrate</p>
            </form>
        </div>
    );
};

export default Login;
