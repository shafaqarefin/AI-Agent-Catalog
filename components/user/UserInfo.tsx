import Image from "next/image";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import SignOutButton from "./Signout";

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-5 w-5 animate-spin text-black" />
      </div>
    );
  }

  if (!session) return <p>Not signed in</p>;

  return (
    <div className="flex justify-between w-fit space-x-2">
      <div className="flex items-center gap-4">
        <Image
          src={session.user?.image ?? "/default-avatar.jpg"}
          alt={session.user?.name ?? "User"}
          width={28}
          height={28}
          className="rounded-full"
        />
        <span>Welcome {session.user?.name}</span>
      </div>
      <SignOutButton />
    </div>
  );
}
