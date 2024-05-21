'use client'

import Link from "next/link"

export const Footer = () => {
    return(
        <footer className="bg-gray-100 text-gray-800 p-8">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-8 md:mb-0">
                        <div className="text-2xl font-bold mb-2">ScubaLog</div>
                        <p className="text-gray-600">&copy; 2024 ScubaLog. All rights reserved.</p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h3 className="font-bold mb-2">Contact Us</h3>
                        <p className="text-gray-600">hello@scubalog.com</p>
                        <p className="text-gray-600">(123) 456-7890 Sales</p>
                        <p className="text-gray-600">(123) 456-7891 Support</p>
                        <p className="text-gray-600">123 Dive St, Ocean City, OC 12345</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Our Company</h3>
                        <Link href="/about" className="text-gray-600 block">
                            About Us
                        </Link>
                        <Link href="/privacy-policy" className="text-gray-600 block">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="text-gray-600 block">
                            Terms of Service
                        </Link>
                        <Link href="/terms-of-service" className="text-gray-600 block">
                            FAQ
                        </Link>
                    </div>
                </div>
            </footer>
    )
}
export default Footer