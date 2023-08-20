"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import formatPrice from "@/utils/formatPrice";
import { formatDate } from "@/utils/formatDate";
import { OrderTypes } from "@/types/orderTypes";

function OrdersPage() {
  const [orders, setOrders] = useState<OrderTypes[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (user && user.id) {
      fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.id }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setOrders(data);
          } else {
            console.error("Data received from the server is not an array:", data);
          }
        })
        .catch((error) => console.error("Error fetching orders:", error));
    }
  }, [user]);

  if (!user) {
    return (
      <div className="w-[89%] m-auto text-center mt-10">
        <h2 className="font-bold text-2xl text-primary uppercase">WOAH THERE...</h2>
        <p>You must be signed in to view orders.</p>
      </div>
    );
  }

  return (
    <div className="w-[89%] m-auto flex flex-col gap-3">
      <div className="text-center my-10">
        <h2 className="font-bold text-2xl text-primary uppercase">Hello {user.username}!</h2>
        <p>Below are your recent orders</p>
      </div>
      {orders.length < 1 ? (
        <div className="font-bold text-center text-lg uppercase">No recent orders</div>
      ) : (
        <>
          {orders.map((order, index) => (
            <div key={index} className="bg-gray-200 p-5 rounded-lg">
              <p>Order ID: {order.id.replace(/\D/g, "")}</p>
              <p>Order Amount: {formatPrice(order.amount)}</p>
              <p>Order Date: {formatDate(order.createdDate)}</p>
              <p>Order Status: {order.status}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default OrdersPage;
