// import { Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
        <header className={styles.header}>
            <div className={styles.logo}>
                Blondes
              </div>
            <nav>
               
            </nav>
            <div className={styles.cartIcon}>
                <ShoppingCart size={44} />
            </div>
        </header>
        </div> 
     );
}
 
export default Header; 