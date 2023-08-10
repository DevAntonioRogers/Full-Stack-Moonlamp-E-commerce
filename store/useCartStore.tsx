import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
  isOpen: boolean;
  cart: [];
  addToCart: (item) => void;
  toggleCart: () => void;
  removeProduct: (item) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      // Set Initial State
      cart: [],
      isOpen: false,

      //Setting State
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! + 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      removeProduct: (item) =>
        set((state) => {
          const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
          if (existingItem && existingItem.quantity! > 1) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! - 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            const filteredCart = state.cart.filter((cartItem) => cartItem.id !== item.id);
            return { cart: filteredCart };
          }
        }),
    }),

    { name: "cart-store" }
  )
);
