import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const location = await prisma.image.create({ data: { name: "User" } });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
