// index.ts
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log(`در حال ساخت یک کاربر جدید...`);

  const newUser = await prisma.user.create({
    data: {
      email: "ali.ahmadi@example.com",
      name: "Ali Ahmadi",
    },
  });

  console.log("کاربر جدید با موفقیت ساخته شد:");
  console.log(newUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
