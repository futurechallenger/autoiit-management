"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUsers() {
  try {
    const users = await prisma.userInfo.findMany();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export { getUsers };
