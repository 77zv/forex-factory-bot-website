import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { env } from "@repo/env/src/env.mjs";
import { appRouter } from "@repo/api/src/root";
import { createTRPCContext } from "@repo/api/src/trpc";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createTRPCContext({ req }),
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST }; 