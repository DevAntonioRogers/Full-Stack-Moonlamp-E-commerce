import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    const orders = await prisma.orders.findMany({
      where: {
        userId: userId,
      },
    });

    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders from the database:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
