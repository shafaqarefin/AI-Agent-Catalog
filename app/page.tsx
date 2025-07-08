"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>AI Catalog</CardTitle>
          <CardDescription>Log in using your Google account.</CardDescription>
        </CardHeader>

        <CardFooter className="flex-col gap-2">
          <Button
            onClick={handleLogin}
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            <Image
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google Logo"
              width={20}
              height={20}
              style={{ objectFit: "contain" }}
              priority
            />
            {isLoading && <Loader2 className="animate-spin h-4 w-4" />}
            {isLoading ? "Logging in..." : "Login with Google"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
