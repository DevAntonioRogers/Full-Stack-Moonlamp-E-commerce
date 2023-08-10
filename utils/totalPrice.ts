

export const totalPrice = (cart) => {
  return cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 0);
};