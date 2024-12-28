import prisma from "@/lib/prisma";

async function getUsers() {
  console.log('getUsers');
  try {
    const users = await prisma.userInfo.findMany();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export { getUsers };
