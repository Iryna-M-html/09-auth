"use client";
import css from "./AuthNavigation.module.css";
import Link from "next/link";
import { logOut } from "@/lib/clientApi";
import { useAuth } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";

const AuthNavigation = () => {
  const { user, isAuth, clearAuth } = useAuth();
  const router = useRouter();
  const handleClick = async () => {
    await logOut();
    clearAuth();
    router.replace("/login");
  };

  return isAuth ? (
    <>
      <p>{user?.userName}</p>
      <button onClick={handleClick}>Logout</button>
    </>
  ) : (
    <ul>
      <li className={css.navigationItem}>
        <Link href="/profile" prefetch={false} className={css.navigationLink}>
          Profile
        </Link>
      </li>

      <li className={css.navigationItem}>
        <p className={css.userEmail}>User email</p>
        <button className={css.logoutButton}>Logout</button>
      </li>

      <li className={css.navigationItem}>
        <Link href="/sign-in" prefetch={false} className={css.navigationLink}>
          Login
        </Link>
      </li>

      <li className={css.navigationItem}>
        <Link href="/sign-up" prefetch={false} className={css.navigationLink}>
          Sign up
        </Link>
      </li>
    </ul>
  );
};

export default AuthNavigation;
