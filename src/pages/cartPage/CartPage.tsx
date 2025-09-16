import styles from "./CartPage.module.css";
import CartItem from "../../components/cartItem/CartItem";
import cartDummy from "../../lib/dummyData/cartDummy";
import CartContainer from "../../components/cartContainer/CartContainer";
import CheckoutSummary from "../../components/checkoutSummary/CheckoutSummary";

const CartPage = () => {
  return (
    <div className={styles.cartPage}>
      Check What's in my cart
      <div className={styles.cartContent}>
        <CartContainer>
          {cartDummy.map((item) => (
            <CartItem
              image={item.image}
              productName={item.productName}
              product={item.product}
              quantity={item.quantity}
              onIncreaseQuantity={() => console.log(`Creases`)}
              onDecreaseQuantity={() => console.log(`creases`)}
              onRemoveFromCart={() => console.log(`removed`)}
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
