import { Routes, Route } from "react-router-dom";

import type { CartItems } from "./components/cartItem/CartItem";
import { useState } from "react";
// import styles from "./App.module.css";
import Index from "./pages/indexPage/Index";
import CartPage from "./pages/cartPage/CartPage";
import NavigationBar from "./components/navigationbar/NavigationBar";
// import CartItem from "./components/cartItem/CartItem";

function App() {
  const [cart, setCart] = useState<CartItems[]>([]);

  function onAddToCart(newItem: CartItems) {
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.product.price === newItem.product.price &&
        item.product.productSize === newItem.product.productSize &&
        item.product.productColor === newItem.product.productColor
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += newItem.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  }

  //save new item to local storage
     


  // Alternative approach
  //   const existingItem = cart.find(
  //   (item) =>
  //     item.product.price === newItem.product.price &&
  //     item.product.productSize === newItem.product.productSize &&
  //     item.product.productColor === newItem.product.productColor
  // );

  // if (existingItem) {
  //   existingItem.quantity += newItem.quantity;
  //   setCart([...cart]); // update
  // } else {
  //   setCart([...cart, newItem]);
  // }

  function onRemoveFromCart(index: number) {
    const updatedCart = cart.filter(function (_, currentIndex) {
      if (currentIndex !== index) {
        return true; // keep this item
      } else {
        return false; // remove this item
      }
    });

    setCart(updatedCart);
    
    
  }
  // Alternative approach
  // const updatedCart = cart.filter((_, i) => i !== index);

  function onIncreaseQuantity(index: number) {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  }

  function onDecreaseQuantity(index: number) {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  }

  return (
    <div className="App">
      <NavigationBar cart={cart} />
      <Routes>
        <Route path="/" element={<Index onAddToCart={onAddToCart} />} index />
        <Route
          path="/cart"
          element={
            <CartPage
              onIncreaseQuantity={onIncreaseQuantity}
              onRemoveFromCart={onRemoveFromCart}
              onDecreaseQuantity={onDecreaseQuantity}
              cart={cart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
