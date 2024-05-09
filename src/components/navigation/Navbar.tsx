"use client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
    <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
        <div className="container mx-auto flex justify-between items-center">
            <a href="" className="text-2xl font-bold">ScubaLog</a>
            <div className="hidden md:flex">
                <Link rel="stylesheet" className="mx-2 hover:text-gray-300" href="/">Home</Link>
                <Link rel="stylesheet" className="mx-2 hover:text-gray-300" href="/about">About</Link>
                <Link rel="stylesheet" className="mx-2 hover:text-gray-300" href="/contact">Contact</Link>
                <Link rel="stylesheet" className="mx-2 hover:text-gray-300" href="/login">Login</Link>
            </div>

            <div className="md:hidden flex items-center">
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