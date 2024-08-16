import React from 'react'
import styles from '@styles/MainLayout/Navbar.module.css'
import { FaBell, FaUserCircle } from 'react-icons/fa'
import Breadcrumb from './Breadcrumb'



function Navbar() {
  return (
    <div className={styles.navbar}>
            <div className={styles.searchContainer}>
            <Breadcrumb />
            </div>
            <div className={styles.userContainer}>
                <FaBell className={styles.userIcon} />
                <FaUserCircle className={styles.userIcon} />
            </div>
        </div>

  )
}

export default Navbar