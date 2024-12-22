import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
// import { use } from "react";

//購入履歴検索API
/* eslint-disable  @typescript-eslint/no-explicit-any */
export async function GET(
    request: NextRequest, 
    {params}:{params: Promise<{userId: string}>} ): Promise<NextResponse>
    {
        const {userId} = await params;

        try {
            const purchases = await prisma.purchase.findMany({
                where: {userId: userId},
            });

            return NextResponse.json(purchases);
        }catch (err) {
            return NextResponse.json(err);
        }
    }