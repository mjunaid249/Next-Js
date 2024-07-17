"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function Cart() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  return (
    <div>
      Cart Component
      <h1 className="text-2xl">path name is : {pathName}</h1>
      <h1 className="text-2xl">
        search params name is : {searchParams.get("search")}
      </h1>
      <h1 className="text-2xl">
        search params name is : {searchParams.get("randomValue")}
      </h1>
    </div>
  );
}
