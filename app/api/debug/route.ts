import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const account = await prisma.account.findFirst({
      where: {
        provider: 'github',
        providerAccountId: '166312704',     
      },
    });
    console.log("Debug Account:", account);
    res.status(200).json({ account });
  } catch (error) {
    console.error("Error fetching account:", error);
    res.status(500).json({ error: "Failed to fetch account" });
  }
}