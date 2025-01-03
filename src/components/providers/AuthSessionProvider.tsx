"use client";

import { PropsWithChildren } from "react";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface AuthSessionProviderProps {
  session?: Session | null;
}

export default function AuthSessionProvider({
  children,
  session,
}: PropsWithChildren<AuthSessionProviderProps>) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
