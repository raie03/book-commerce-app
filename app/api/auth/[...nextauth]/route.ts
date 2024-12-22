import { nextAuthOptions } from "@/app/lib/next-auth/optinons";
// import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

// const handler: NextApiHandler = NextAuth(nextAuthOptions);

// export {handler as GET, handler as POST};

type CombineRequest = Request & NextApiRequest;
type CombineResponse = Response & NextApiResponse;

async function handler(req: CombineRequest, res: CombineResponse) {
  return await NextAuth(req, res, nextAuthOptions);
}

export { handler as GET, handler as POST };