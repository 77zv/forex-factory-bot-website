import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@repo/api/src/auth";
 
export const { POST, GET } = toNextJsHandler(auth);