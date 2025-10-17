"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    console.log("Layout mounted");
  }, []);

  return <>{children}</>;
}
