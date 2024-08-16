import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '@styles/MainLayout/Breadcrumb.module.css';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    

    return (
        <div aria-label="breadcrumb">
            <ol className={styles.breadcrumb}>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const displayName = capitalizeFirstLetter(value);
                    return isLast ? (
                        <li key={to} className={`${styles.breadcrumbItem} ${styles.breadcrumbItemActive}`} aria-current="page">
                            {displayName}
                        </li>
                    ) : (
                        <li key={to} className={styles.breadcrumbItem}>
                            <Link to={to} className={styles.breadcrumbLink}>{displayName}</Link>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Breadcrumb;
