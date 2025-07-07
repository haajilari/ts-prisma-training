// index.ts
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("در حال آپدیت کردن نام یک کاربر...");

  const updatedUser = await prisma.user.update({
    where: {
      email: "ali.ahmadi@example.com", // کاربری که می‌خواهیم آپدیت کنیم
    },
    data: {
      name: "Ali Ahmadi (Updated Name)", // مقدار جدید برای فیلد name
    },
  });

  console.log("کاربر با موفقیت آپدیت شد:");
  console.log(updatedUser);
  // // 1. پیدا کردن همه کاربران
  // console.log("در حال دریافت لیست همه کاربران...");
  // const allUsers = await prisma.user.findMany();
  // console.log("همه کاربران:");
  // console.dir(allUsers, { depth: null }); // .dir برای نمایش بهتر آبجکت‌ها

  // // 2. پیدا کردن یک کاربر خاص
  // console.log("\nدر حال جستجوی یک کاربر با ایمیل مشخص...");
  // const specificUser = await prisma.user.findUnique({
  //   where: {
  //     email: "ali.ahmadi@example.com", // ایمیل کاربری که قبلا ساختید
  //   },
  // });
  // console.log("کاربر پیدا شده:");
  // console.log(specificUser);
  // console.log(`در حال ساخت یک کاربر جدید...`);

  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "ali.ahmadi@example.com",
  //     name: "Ali Ahmadi",
  //   },
  // });

  // console.log("کاربر جدید با موفقیت ساخته شد:");
  // console.log(newUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
