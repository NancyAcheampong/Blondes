import { Routes, Route, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import styles from "./Header.module.css";
import CartPage from "../../pages/cartPage/CartPage";
import Index from "../../pages/indexPage/Index";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>Blondes</div>
        <nav></nav>

        <Link to="/cart" className={styles.cartLink}>
          <ShoppingCart size={44} />
        </Link>
      </header>
        <Routes>
          <Route path="/" element={<Index />} index />
            <Route path="/cart" element={<CartPage />} /> 
        </Routes>
    </div>

  );
};

export default Header;
