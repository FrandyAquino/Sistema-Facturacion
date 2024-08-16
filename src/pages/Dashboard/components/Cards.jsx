import React from 'react'
import styles from '@styles/Dashboard/components/Cards.module.css'

function Cards({title, total, imgUrl}) {
    return (
        <div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.cardInformation}>
                        <h3>{total}</h3>
                        <p>{title}</p>
                    </div>
                    <div className={styles.cardImage}>
                        <img src={imgUrl} alt="Card Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
