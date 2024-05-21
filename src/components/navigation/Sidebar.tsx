'use client'
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export default function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 sm:p-6 flex flex-col ${isOpen ? "w-64" : "w-50"} transition-width duration-300`}>
            <div className="flex flex-col justify-between h-full">
                <a href="/" className="text-2xl font-bold mb-8">SL</a>
                <div className="flex flex-col flex-grow space-y-10">
                    <Link rel="stylesheet" className="hover:text-gray-300" href="/new_dive">New Dive</Link>
                    <Link rel="stylesheet" className="hover:text-gray-300" href="/about">View All Dives</Link>
                    <Link rel="stylesheet" className="hover:text-gray-300" href="/contact">Profile</Link>
                    <Link rel="stylesheet" className="hover:text-gray-300" href="/contact">Settings</Link>
                </div>
                <div className="flex justify-center mt-4">
                    <button onClick={() => signOut()} className="hover:text-gray-300">Sign Out</button>
                </div>
                <div className="flex justify-center mt-4">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};