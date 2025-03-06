"use client";

import { type ReactNode } from "react";
import { TRPCProvider } from "./trpc-provider";

export function Providers({ children }: { children: ReactNode }) {
  return <TRPCProvider>{children}</TRPCProvider>;
}
