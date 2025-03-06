import { createAuthClient } from "better-auth/react";
 
export const authClient = createAuthClient({
});
 
export const { signIn, signOut, useSession } = authClient;

export const signInDiscord = async () => {
    const data = await signIn.social({
        provider: "discord"
    })
    return data;
};