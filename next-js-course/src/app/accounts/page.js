import { redirect } from "next/navigation";

export default function AccountPage() {
  const userInfo = null;

  if (userInfo === null) redirect("/profile");
  return <div>Account Page</div>;
}
