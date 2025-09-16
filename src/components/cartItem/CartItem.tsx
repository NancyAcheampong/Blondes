import styles from "./CartItem.module.css";
import { Trash2 } from "lucide-react";
// import { useState } from "react";

type ProductDetails = {
  price: number;
  productSize: string;
  productColor: string;
};

type CartItemProps = {
  product: ProductDetails;
  image: string;
  productName: string;
  onRemoveFromCart?: () => void;
  onIncreaseQuantity?: () => void;
  onDecreaseQuantity?: () => void;
  quantity: number;
};

const CartItem = ({
  image,
  productName,
  product,
  quantity,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: CartItemProps) => {
  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.cartItem}>
        <img src={image} className={styles.productImage} />
        <div className={styles.productInfo}>
          <div className={styles.productDetails}>
            <h3 className={styles.productName}>{productName}</h3>
            <p className={styles.productDescription}>
              {product.productSize}
              <span> {product.productColor}</span>
            </p>

            <p className={styles.productPrice}>{product.price}</p>
          </div>
          <div className={styles.actions}>
            <button 
            onClick={onRemoveFromCart}
            className={styles.removeButton}
            >
              <Trash2 />
            </button>
            <div className={styles.quantityControl}>
              <button 
              className={styles.quantityButton}
                onClick= {onDecreaseQuantity}
              >-</button>
              <span className={styles.quantity}>{quantity}</span>
              <button 
              onClick= {onIncreaseQuantity}
              className={styles.quantityButton}>+
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
