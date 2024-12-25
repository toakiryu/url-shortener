"use server";

import { headers } from "next/headers";

async function page() {
  const header = await headers();
  return (
    <div className="flex flex-col justify-center items-center w-full h-dvh">
      <h1 className="font-bold text-xl mb-5">IP Address</h1>
      <span>{header.get("x-forwarded-for")}</span>
    </div>
  );
}

export default page;
