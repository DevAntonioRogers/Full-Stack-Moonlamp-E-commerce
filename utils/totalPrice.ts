import { CartType } from "@/types/cartTypes";

export const totalPrice = (cart : CartType[]) => {
  return cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 0);
};