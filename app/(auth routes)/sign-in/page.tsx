"use client";

import { login } from "@/lib/api/clientApi";
import { useAuth } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";
import css from "./SignInPage.module.css";
import { LoginRequest } from "@/types/user";

const Login = () => {
  const { setUser } = useAuth();
  const router = useRouter();
  const handleAction = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as unknown as LoginRequest;
    const user = await login(payload);
    setUser(user);
    router.replace("/profile");
  };
  return (
    <main className={css.mainContent}>
      <form action={handleAction} className={css.form}>
        <h2 className={css.formTitle}>Sign In</h2>

        <div className={css.formGroup}>
          <label className={css.formGrouplabel}>
            Email
            <input type="email" name="email" className={css.input} required />
          </label>
        </div>

        <div className={css.formGroup}>
          <label className={css.formGrouplabel}>
            Password
            <input
              type="password"
              name="password"
              className={css.input}
              required
            />
          </label>
        </div>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Login
          </button>
        </div>
      </form>
    </main>
  );
};
export default Login;
