"use client";

import css from "./EditProfilePage.module.css";
import { editUser, EditRequest } from "@/lib/clientApi";
import { useAuth } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";

const Edit = () => {
  const { setUser } = useAuth();
  const router = useRouter();
  const handleActionEdit = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as unknown as EditRequest;
    const user = await editUser(payload);
    setUser(user);
    router.replace("/profile");
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <img
          src="avatar"
          alt="User Avatar"
          width={120}
          height={120}
          className={css.avatar}
        />

        <form action={handleActionEdit} className={css.profileInfo}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              className={css.input}
            />
          </div>

          <p>Email: user_email@example.com</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button type="button" className={css.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Edit;
