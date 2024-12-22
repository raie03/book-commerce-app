import { nextAuthOptions } from "@/app/lib/next-auth/optinons";
import { NextApiHandler } from "next";
import NextAuth from "next-auth";

const handler: NextApiHandler = NextAuth(nextAuthOptions);

export {handler as GET, handler as POST};