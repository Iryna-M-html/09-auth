"use client";

import { logOut } from "@/lib/api/clientApi";
import { useAuth } from "@/lib/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthNavigation = () => {
  const { user, isAuthenticated, clearAuth } = useAuth();
  const router = useRouter();
  const handleClick = async () => {
    await logOut();
    clearAuth();
    router.replace("/sign-in");
  };

  return (
    <ul>
      {isAuthenticated ? (
        <>
          <li>{user?.email}</li>

          <li>
            <Link href="/profile">Profile</Link>
          </li>

          <li>
            <button onClick={handleClick}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link href="/sign-in">Sign in</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign up</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default AuthNavigation;
