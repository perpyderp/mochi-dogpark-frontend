import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
const handler = NextAuth({
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
        // console.log("Session Callback: " + JSON.stringify({token, user, session}, null, 2) )

        /*
            token contains all the user information we need, we can pass whatever we want to the session in the return statement.
        */ 
        return {
          ...session
        }
    }
},
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }