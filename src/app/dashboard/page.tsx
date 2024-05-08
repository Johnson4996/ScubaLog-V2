import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";


export default function Dashboard() {
    return <div>Dashboard</div>;
}