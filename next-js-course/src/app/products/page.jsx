import Link from "next/link";
import React from "react";

const Prodcuts = ({ searchParams }) => {
  console.log(searchParams);
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl text-black font-bold text-center mt-10">
        Products Page
      </h1>
      <Link
        href={"/"}
        className="border border-green-600 p-2 text-green-500 rounded-xl hover:bg-green-500 hover:text-white transition duration-200"
      >
        Navigate to Home
      </Link>
    </div>
  );
};

export default Prodcuts;
