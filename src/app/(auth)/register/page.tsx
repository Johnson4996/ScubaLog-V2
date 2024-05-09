
import Link from "next/link";
import { RegisterForm } from "./form";

export default function Register() {
    return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <div className="sm:hadow-xl px-8 pb-8 pt-8 sm:bg-white rounded-xl space-y-12">
            <h1 className="font-semibold text-2xl">Create your Account</h1>
            <RegisterForm />
            <p className="text-center">
                Already have an account? <Link className="text-link hover:underline" href="/login">Sign in</Link>
            </p>
        </div>
    </div>
    )
} 