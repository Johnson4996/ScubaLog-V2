
import { getServerSession } from "next-auth";
import { Navbar } from "../components/navigation/Navbar";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "./user";
import { LoginButton, LogoutButton } from "./auth";

export default async function Home() {
const session = await getServerSession(authOptions)
  return (
    <main>
  <Navbar />
  <LoginButton />
  <LogoutButton />
  <h2>Server Call</h2>
  <pre>{JSON.stringify(session)}</pre>
  <h2>Client Call</h2>
  <User />
  </main>


  );
}
