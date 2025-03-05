"use client";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";
import { TRPCProvider } from "./trpc-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <TRPCProvider>{children}</TRPCProvider>
    </SessionProvider>
  );
} 