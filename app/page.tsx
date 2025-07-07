"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>AI Catalog</CardTitle>
          <CardDescription>Log in using your google account.</CardDescription>
        </CardHeader>

        <CardFooter className="flex-col gap-2">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            variant="outline"
            className="w-full"
          >
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
