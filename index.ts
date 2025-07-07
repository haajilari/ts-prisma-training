// index.ts
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const page = 1; // شماره صفحه
  const pageSize = 2; // تعداد نتایج در هر صفحه

  const users = await prisma.user.findMany({
    // 1. فیلتر کردن (Filtering)
    where: {
      name: {
        contains: "Mohammadi", // کاربرانی که نامشان شامل 'Mohammadi' است
      },
    },
    // 2. مرتب‌سازی (Ordering)
    orderBy: {
      createdAt: "desc", // بر اساس تاریخ ساخت، نزولی (جدید به قدیم)
    },
    // 3. صفحه‌بندی (Pagination)
    take: pageSize, // چه تعداد رکورد بگیرم
    skip: (page - 1) * pageSize, // چه تعداد رکورد را رد کنم
  });

  console.log("نتیجه کوئری پیشرفته:");
  console.log(users);
  // const page = 1; // شماره صفحه
  // const pageSize = 2; // تعداد نتایج در هر صفحه

  // const users = await prisma.user.findMany({
  //   // 1. فیلتر کردن (Filtering)
  //   where: {
  //     name: {
  //       contains: "Mohammadi", // کاربرانی که نامشان شامل 'Mohammadi' است
  //     },
  //   },
  //   // 2. مرتب‌سازی (Ordering)
  //   orderBy: {
  //     createdAt: "desc", // بر اساس تاریخ ساخت، نزولی (جدید به قدیم)
  //   },
  //   // 3. صفحه‌بندی (Pagination)
  //   take: pageSize, // چه تعداد رکورد بگیرم
  //   skip: (page - 1) * pageSize, // چه تعداد رکورد را رد کنم
  // });

  // console.log("نتیجه کوئری پیشرفته:");
  // console.log(users);
  // await prisma.user.createMany({
  //   data: [
  //     { email: "reza@example.com", name: "Reza Tehrani" },
  //     { email: "sara@example.com", name: "Sara Mohammadi" },
  //     { email: "maryam@example.com", name: "Maryam Jafari" },
  //   ],
  //   skipDuplicates: true, // از خطای ایمیل تکراری جلوگیری می‌کنه
  // });
  // console.log("کاربران جدید اضافه شدند.");
  // console.log("در حال حذف یک کاربر...");

  // const deletedUser = await prisma.user.delete({
  //   where: {
  //     email: "ali.ahmadi@example.com", // ایمیل کاربری که می‌خواهیم حذف کنیم
  //   },
  // });

  // console.log("کاربر با موفقیت حذف شد:");
  // console.log(deletedUser);
  // console.log("در حال آپدیت کردن نام یک کاربر...");

  // const updatedUser = await prisma.user.update({
  //   where: {
  //     email: "ali.ahmadi@example.com", // کاربری که می‌خواهیم آپدیت کنیم
  //   },
  //   data: {
  //     name: "Ali Ahmadi (Updated Name)", // مقدار جدید برای فیلد name
  //   },
  // });

  // console.log("کاربر با موفقیت آپدیت شد:");
  // console.log(updatedUser);
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
