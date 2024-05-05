"use client";

import { revalidateTag } from "next/cache";

export async function purgeTransactionListCache() {
  revalidateTag("transaction-list");
}
