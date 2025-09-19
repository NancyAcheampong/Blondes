import styles from './NavigationBar.module.css';
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import type { CartItems } from '../cartItem/CartItem';


type NavigationBarProps =
{
    cart: CartItems[]
}

const NavigationBar = ({cart}: NavigationBarProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Blondes</div>

      <Link to="/cart" className={styles.cartLink}>
        <ShoppingCart size={44} />
        <span>
            {cart.length}
        </span>
      </Link>
    </header>
  );
};

export default NavigationBar;
