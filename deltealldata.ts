import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function deleteallusers(){

const deletedUserInfo = await prisma.user.deleteMany();

console.log(`Deleted ${deletedUserInfo.count} users`);
console.log("All users deleted Successfully!")
}
deleteallusers()
