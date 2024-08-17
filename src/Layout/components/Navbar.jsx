import React, { useEffect, useState } from 'react';
import styles from '@styles/MainLayout/Navbar.module.css';
import { FaUserCircle, FaBars } from 'react-icons/fa'; 
import Breadcrumb from '@Layout/components/Breadcrumb.jsx';
import { supabase } from '@database/databaseAuth';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaBox, FaTruck, FaUserTie, FaSignOutAlt, FaMoneyBill } from 'react-icons/fa';

function Navbar() {
  const [userEmail, setUserEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (user) {
        setUserEmail(user.email);
      } else if (error) {
        console.log('Error fetching user:', error.message);
      }
    };

    fetchUser();
  }, []);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
    } catch (error) {
      console.log('Error al cerrar sesión: ', error.message);
    }
  };

  return (
    <div className={styles.navbar}>
      <button className={styles.toggleButton} onClick={handleToggleModal}>
        <FaBars />
      </button>
      <div className={styles.searchContainer}>
        <Breadcrumb />
      </div>
      <div className={styles.userContainer}>
        <span className={styles.userEmail}>{userEmail}</span> 
        <FaUserCircle className={styles.userIcon} />
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={handleCloseModal}>X</button>
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
            <button onClick={handleLogout} className={styles.sidebarButton}>
              <FaSignOutAlt className={styles.sidebarIcon} /> Salir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
