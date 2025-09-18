import { useState, useEffect } from "react";

const storage_key = "cart";

export function useCart() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem(storage_key);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(storage_key, JSON.stringify(cart));
  }, [cart]);

  const add = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id // 🔑 agora usa ID
      );

      if (existingItemIndex !== -1) {
        return prevCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const increase = (item) => {
    setCart((prevCart) =>
      prevCart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decrease = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const remove = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== item.id));
  };

  const clear = () => {
    setCart([]);
    localStorage.removeItem(storage_key);
  };

  const itemCount = cart.length;
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return {
    cart,
    add,
    increase,
    decrease,
    remove,
    clear,
    itemCount,
    totalQuantity,
  };
}