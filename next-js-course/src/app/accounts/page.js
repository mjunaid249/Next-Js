import { redirect } from "next/navigation";

export default function AccountPage() {
  const userInfo = null;

  if (userInfo === null) redirect("/products?search=product1");
  return <div>Account Page</div>;
}
