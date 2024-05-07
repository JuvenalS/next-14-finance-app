import TransactionForm from "@/app/dashboard/components/transaction-form";
import { createClient } from "@/lib/supabase/server";
import NotFound from "./not-found";

export const metadata = {
  title: "Edit Transaction"
}

export default async function Page({ params: { id } }) {
  const supabase = createClient();
  const { data: transaction, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("id", id)
    .single();

    if (error) NotFound()

  return (
    <>
    <h1 className="text-4xl font-semibold mb-8">Edit Transaction</h1>
    <TransactionForm initialData={transaction} />
    </>
  );
}
