import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartType } from "@/types/cartTypes";

type WishlistState = {
  isOpen: boolean;
  openWishlist: boolean;
  onWishList: string;
  wishList: CartType[];
  addToWishlist: (item: CartType) => void;
  removeFromWishlist: (item: CartType) => void;
  toggleWishList: () => void;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      // INITIAL VALUES
      isOpen: false,
      openWishlist: false,
      wishList: [],
      onWishList: "wishlist",

      // SETTING THE STATE
      toggleWishList: () => set((state) => ({ openWishlist: !state.openWishlist })),
      addToWishlist: (item) =>
        set((state) => {
          const existingItem = state.wishList.find((wishItem) => wishItem.id === item.id);
          if (existingItem) {
            const updatedWishList = state.wishList.map((wishItem) => {
              if (wishItem.id === item.id) {
                return { ...wishItem, quantity: 1 };
              }
              return wishItem;
            });
            return { wishList: updatedWishList };
          } else {
            return { wishList: [...state.wishList, { ...item, quantity: 1 }] };
          }
        }),
      removeFromWishlist: (item) =>
        set((state) => {
          const existingItem = state.wishList.find((wishItem) => wishItem.id === item.id);
          if (existingItem && existingItem.quantity! > 1) {
            const updatedWishList = state.wishList.map((wishItem) => {
              if (wishItem.id === item.id) {
                return { ...wishItem, quantity: wishItem.quantity! - 1 };
              }
              return wishItem;
            });
            return { wishList: updatedWishList };
          } else {
            const filteredWishList = state.wishList.filter((wishItem) => wishItem.id !== item.id);
            return { wishList: filteredWishList };
          }
        }),
    }),
    { name: "wishlist-store" }
  )
);
