"use client";
import Image from "next/image";
import css from "./EditProfilePage.module.css";
import { editUser } from "@/lib/api/clientApi";
import { useAuth } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";
import { EditRequest } from "@/types/user";

const Edit = () => {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const handleActionEdit = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const payload: EditRequest = { username };

    const updatedUser = await editUser(payload);
    setUser(updatedUser);
    router.replace("/profile");
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <div className={css.avatarWrapper}>
          <Image
            src={
              user?.avatar ??
              "https://ac.goit.global/fullstack/react/default-avatar.jpg"
            }
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>

        <form action={handleActionEdit} className={css.profileInfo}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              className={css.input}
              defaultValue={user?.username}
              required
            />
          </div>

          <p>Email: {user?.email}</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>

            <button
              type="button"
              className={css.cancelButton}
              onClick={() => router.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Edit;
