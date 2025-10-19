import Image from "next/image";
import css from "./page.module.css";
import Link from "next/link";
import { getServerMe } from "@/lib/api/serverApi";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const user = await getServerMe();
  return {
    title: `Profile | ${user.username}`,
    description: `Profile page of ${user.username}`,
  };
};

const Profile = async () => {
  const user = await getServerMe();

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={
              user.avatar ??
              "https://ac.goit.global/fullstack/react/default-avatar.jpg"
            }
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
