
import Link from "next/link";
import { Form as LoginForm } from "./form";

export default function Register() {
    return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <div className="sm:hadow-xl px-8 pb-8 pt-8 sm:bg-white rounded-xl space-y-12">
            <h1 className="font-semibold text-2xl">Login</h1>
            <LoginForm />
            <p className="text-center">
                Need to create an account? <Link className="text-link hover:underline" href="/register">Sign Up</Link>
            </p>
        </div>
    </div>
    )
} 