import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "@/store/useCartStore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Corrected the import path for useRouter
import { useClerk } from "@clerk/nextjs";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = () => {
  const router = useRouter();
  const cartStore = useCartStore();
  const { user } = useClerk();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const userId = user?.id;

        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cartStore.cart,
            payment_intent_id: cartStore.paymentIntent,
            userId: userId, 
          }),
        });

        if (response.status === 403) {
          router.push("/");
          return;
        }

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data && data.paymentIntent) {
          setClientSecret(data.paymentIntent.client_secret);
          cartStore.setPaymentIntent(data.paymentIntent.id);
        } else {
          console.error("Unexpected data structure:", data);
        }
      } catch (error) {
        console.error("There was a problem:", error);
      }
    };

    createPaymentIntent();
  }, [user]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
