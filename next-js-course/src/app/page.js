"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="font-bold text-3xl">Welcome to Next Js Course!</h1>
      <Link
        href={"/products"}
        className="border border-black p-2 rounded-xl hover:bg-slate-900 hover:text-white transition duration-200"
      >
        Navigate to Prodcuts
      </Link>
      <h2 className="font-bold text-black text-2xl">
        Alternative ways using useRouter
      </h2>
      <button
        onClick={() => router.push("/products")}
        className="border border-black p-2 rounded-xl hover:bg-slate-900 hover:text-white transition duration-200"
      >
        useRouter Navigation to products
      </button>

      <button
        onClick={() => router.push("/accounts")}
        className="border border-black p-2 rounded-xl hover:bg-slate-900 hover:text-white transition duration-200"
      >
        useRouter Navigation to Account
      </button>
    </main>
  );
}
