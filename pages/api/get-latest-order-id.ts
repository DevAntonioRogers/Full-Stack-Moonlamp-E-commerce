

import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const latestOrder = await prisma.orders.findFirst({
      orderBy: {
        createdDate: 'desc'
      },
      select: {
        id: true
      }
    });
    
    if (!latestOrder) {
      return res.status(404).json({ message: "No orders found" });
    }

    return res.status(200).json({ orderId: latestOrder.id });
  } catch (error) {
    console.error("Error fetching latest order ID:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
