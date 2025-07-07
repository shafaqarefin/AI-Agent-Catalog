import Image from "next/image";
import { useSession } from "next-auth/react";
import SignOutButton from "./Signout";

export default function UserInfo() {
  const { data: session } = useSession();

  if (!session) return <p>Not signed in</p>;

  return (
    <>
      <div className="flex items-center gap-4">
        <Image
          src={session.user?.image ?? "/default-avatar.jpg"}
          alt={session.user?.name ?? "User"}
          width={28}
          height={28}
          className="rounded-full"
        />
        <span> Welcome {session.user?.name}</span>
      </div>
      <SignOutButton />
    </>
  );
}
