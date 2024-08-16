import React from 'react'
import styles from '@styles/MainLayout/MainLayout.module.css'
import Sidebar from '@Layout/components/Sidebar'
import Navbar from '@Layout/components/Navbar'

export default function MainLayout({ children }) {
    return (
        <div className={styles.gridContainer}> 
            <Navbar />
            <Sidebar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
