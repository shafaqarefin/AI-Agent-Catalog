import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <Button variant="destructive" onClick={() => signOut({ callbackUrl: "/" })}>
      Sign Out
    </Button>
  );
}
