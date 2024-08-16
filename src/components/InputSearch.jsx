import React from 'react';
import styles from '@styles/components/InputSearch.module.css';

function InputSearch({ placeholder, searchTerm, setSearchTerm }) {
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                className={styles.searchInput}
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleChange}
            />
            <button className={styles.searchButton}>
                Buscar
            </button>
        </div>
    );
}

export default InputSearch;
