import { mongoInit } from '@/lib/db/dbConfig';
import User from '@/models/user.model';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
// import { User as authUser, type DefaultSession } from 'next-auth';

// declare module 'next-auth' {
//   interface Session {
//     user: {
//       id: string;
//       token: string;
//       name: string;
//       email: string;
//       password: string;
//     };
//   }
//   interface authUser {
//     id: string;
//     token: string;
//     name: string;
//     email: string;
//     password: string;
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     user: {
//       id: string;
//       token: string;
//       name: string;
//       email: string;
//       password: string;
//     };
//   }
// }

export const authOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 1 day in seconds
  },
  jwt: {
    maxAge: 24 * 60 * 60, // 1 day in seconds
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null; // Invalid credentials
        }
        const requestBody = {
          email: credentials?.email,
          password: credentials?.password,
        };
        const res = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: { 'Content-Type': 'application/json' },
        });
        const resdata = await res.json();
        console.log('Login...', resdata);
        if (
          resdata.status === 400 ||
          resdata.status === 401 ||
          resdata.status === 403 ||
          resdata.status === 500
        ) {
          return null;
        }
        if (resdata.status === 200 || resdata.status === 201) {
          return resdata.user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider == 'google') {
        await mongoInit();
        const existedUser = await User.findOne({ email: user.email });
        if (!existedUser) {
          const newUser = new User({
            email: user.email,
            name: user.name,
          });
          await newUser.save();
        }
      }
      return true;
    },
    async jwt({ token }) {
      token.role = 'user';
      return token;
    },
    async session({ session }) {
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
