import { useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useClerk } from "@clerk/nextjs";

const OrderSuccess = () => {
  const cartStore = useCartStore();
  const { user } = useClerk();

  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);

  return (
    <>
      <button onClick={() => cartStore.setCheckout("cart")}>Back to store</button>
      <div className="w-full h-full flex justify-center items-center flex-col">
        <h1 className="font-bold font-xl">Thanks {user?.username} for your order</h1>
        <p className="font-medium">
          You can view your order history <a href="/orders">here</a>
        </p>
      </div>
    </>
  );
};

export default OrderSuccess;
