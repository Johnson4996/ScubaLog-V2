'use client'

import Footer from "@/components/footer"
import Link from "next/link"

export default function Homepage (){
    return(
        <div>
            <section className="hero bg-primary text-white text-center py-60">
                <h1 className="text-5xl font-bold mb-4">Dive into Your Adventures with ScubaLog</h1>
                <div>
                <p className="text-xl mb-8">ScubaLog is the ultimate digital dive log for scuba enthusiasts. Easily log your dives, track your gear, explore dive sites, and analyze your diving statistics—all in one place..</p>
                
                </div>
                <Link href="/signup" className="bg-white text-blue-900 py-2 px-4 rounded">
                  Get Started
                </Link>
                
            </section>
            
            <section className="features py-16 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-8 text-left">Features</h2>
                <div className="flex flex-col justify-start">
                    <div>
                        <img src="/icons/log-dives.svg" alt="Log Dives" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Log Dives</h3>
                        <p>Keep a detailed log of all your dives.</p>
                    </div>
                    <div>
                        <img src="/icons/track-gear.svg" alt="Track Gear" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Track Gear</h3>
                        <p>Manage and track your dive gear.</p>
                    </div>
                    <div>
                        <img src="/icons/dive-sites.svg" alt="Dive Sites" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Dive Sites</h3>
                        <p>Explore and add new dive sites.</p>
                    </div>
                    <div>
                        <img src="/icons/statistics.svg" alt="Statistics" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Statistics</h3>
                        <p>Analyze your diving statistics.</p>
                    </div>
                </div>
            </section>
            
            <section className="testimonials py-16 text-center">
                <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
                <div className="flex justify-around">
                    <div className="max-w-xs">
                        <img src="/users/user1.jpg" alt="User 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <p>"ScubaLog has transformed the way I log my dives. It's user-friendly and comprehensive."</p>
                        <p className="font-bold mt-2">- Jane Doe</p>
                    </div>
                    <div className="max-w-xs">
                        <img src="/users/user2.jpg" alt="User 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <p>"A must-have for any serious diver. The gear tracking feature is fantastic."</p>
                        <p className="font-bold mt-2">- John Smith</p>
                    </div>
                </div>
            </section>
            
            <section className="how-it-works py-16 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-8">How It Works</h2>
                <div className="flex justify-around">
                    <div className="max-w-xs">
                        <img src="/icons/create-account.svg" alt="Create Account" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Create an Account</h3>
                        <p>Sign up in minutes and start your journey.</p>
                    </div>
                    <div className="max-w-xs">
                        <img src="/icons/log-your-dives.svg" alt="Log Your Dives" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Log Your Dives</h3>
                        <p>Easily log and manage your dives.</p>
                    </div>
                    <div className="max-w-xs">
                        <img src="/icons/explore-sites.svg" alt="Explore Sites" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Explore Dive Sites</h3>
                        <p>Discover new dive sites and share your experiences.</p>
                    </div>
                </div>
            </section>
            
            <section className="cta py-16 text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to Dive In?</h2>
                <Link href="/signup" className="bg-blue-900 text-white py-2 px-4 rounded">
                    Get Started with ScubaLog
                </Link>
            </section>
            
            <Footer />
        </div>
    )
}


