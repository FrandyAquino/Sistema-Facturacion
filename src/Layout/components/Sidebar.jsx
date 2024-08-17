import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '@styles/MainLayout/Sidebar.module.css'
import { FaTachometerAlt, FaUsers, FaBox, FaTruck, FaUserTie, FaSignOutAlt, FaMoneyBill } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { supabase } from '@database/databaseAuth'


function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
    } catch (error) {
      console.log('Error al cerrar sesión: ', error.message);
    }
  };


  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        JaviTech
      </div>
      <div className={styles.sidebarMenuContainer}>
        <ul className={styles.sidebarMenu}>
          <li>
            <Link to="/" className={styles.sidebarLink}><FaTachometerAlt className={styles.sidebarIcon} /> Panel</Link>
          </li>
          <li>
            <Link to="/sales" className={styles.sidebarLink}><FaMoneyBill className={styles.sidebarIcon} /> Ventas</Link>
          </li>
          <li>
            <Link to="/clients" className={styles.sidebarLink}><FaUsers className={styles.sidebarIcon} /> Clientes</Link>
          </li>
          <li>
            <Link to="/inventory" className={styles.sidebarLink}><FaBox className={styles.sidebarIcon} /> Inventario</Link>
          </li>
          <li>
            <Link to="/suppliers" className={styles.sidebarLink}><FaTruck className={styles.sidebarIcon} /> Proveedores</Link>
          </li>
          <li>
            <Link to="/employees" className={styles.sidebarLink}><FaUserTie className={styles.sidebarIcon} /> Empleados</Link>
          </li>
        </ul>
      </div>
      <button onClick={handleLogout} className={styles.sidebarButton}>
        <FaSignOutAlt className={styles.sidebarIcon} /> Salir
      </button>
    </div>
  );
}

export default Sidebar;