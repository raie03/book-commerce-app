import { nextAuthOptions } from "@/app/lib/next-auth/optinons";
import NextAuth from "next-auth";

const handler = NextAuth(nextAuthOptions);

export {handler as GET, handler as POST};