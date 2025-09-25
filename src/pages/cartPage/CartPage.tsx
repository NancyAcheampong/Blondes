import styles from "./CartPage.module.css";
import CartItem, { type CartItems } from "../../components/cartItem/CartItem";
// import cartDummy from "../../lib/dummyData/cartDummy";
import CartContainer from "../../components/cartContainer/CartContainer";
import CheckoutSummary from "../../components/checkoutSummary/CheckoutSummary";
import HeadLiner from "../../components/headLiner/HeadLiner";

type CartProps = {
  cart: CartItems[];
  onRemoveFromCart: (index: number) => void;
  onIncreaseQuantity: (index: number) => void;
  onDecreaseQuantity: (index: number) => void;
  onClearCart: () => void;
};

const CartPage = ({
  onIncreaseQuantity,
  onRemoveFromCart,
  onDecreaseQuantity,
  cart,
  onClearCart,
}: CartProps) => {
  console.log(cart);
  return (
    <div>
      <HeadLiner onClearCart={() => onClearCart()} />
      <div className={styles.cartContent}>
        <CartContainer>
          {cart.map((item, index) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
              onIncreaseQuantity={() => onIncreaseQuantity(index)}
              onDecreaseQuantity={() => {
                onDecreaseQuantity(index);
              }}
              onRemoveFromCart={() => {
                onRemoveFromCart(index);
              }}
            />
          ))}
        </CartContainer>
        <CheckoutSummary
          header="Order Summary"
          subtotal={{ title: "Subtotal", subtotalAmount: 100 }}
          discount={{ label: "Discount", discountAmount: -10 }}
          deliveryFee={{ label: "Delivery Fee", deliveryFeeAmount: 5 }}
          total={{ label: "Total", totalAmount: 95 }}
          onCheckout={() => console.log("Proceed to checkout")}
        />
      </div>
    </div>
  );
};

export default CartPage;
