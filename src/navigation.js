import React from 'react';

const NavigationBar = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <a href="#" style={styles.navLink}>Home</a>
                </li>
                <li style={styles.navItem}>
                    <a href="#" style={styles.navLink}>Fuel Tracking</a>
                </li>
                <li style={styles.navItem}>
                    <a href="#" style={styles.navLink}>Deliveries</a>
                </li>
                <li style={styles.navItem}>
                    <a href="#" style={styles.navLink}>Cost Optimization</a>
                </li>
                <li style={styles.navItem}>
                    <a href="#" style={styles.navLink}>Reports</a>
                </li>
                <li style={styles.navItem}>
                    <a href="#" style={styles.navLink}>Settings</a>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: '#333',
        padding: '10px 0',
    },
    navList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    navItem: {
        margin: '0 10px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
    },
};

export default NavigationBar;
