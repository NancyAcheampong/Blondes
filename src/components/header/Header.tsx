// import { Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-xl px-3 py-2 rounded-lg">
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