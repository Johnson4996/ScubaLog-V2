
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Navbar } from "@/components/navigation/Navbar";
import Link from "next/link";
import { Homepage } from "./(app)/homepage/page";

export default async function Home() {
const session = await getServerSession(authOptions)
  return (
    <main>
      <Navbar />
      <Homepage />
  </main>


  );
}
