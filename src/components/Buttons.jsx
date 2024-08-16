import React from 'react';
import styles from '@styles/components/Buttons.module.css';

function Buttons({title, onClick}) {
    return (
        <div>
            <button className={styles.button} onClick={onClick}>
                {title}
            </button>
        </div>
    );
}

export default Buttons;
