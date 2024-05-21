

import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import DiveCard from "@/components/ui/cards/divecard"



export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gray-100 py-8 px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/new_log">
          <Card className="bg-primary text-center content-center hover:bg-primary-light h-32">
              <div className="text-2xl font-bold align-middle flex text-white p-4 items-center justify-evenly">All Dives <PlusCircle/></div>
          </Card>
          </Link>
          <Link href="/new_log">
          <Card className="bg-secondary text-center content-center hover:bg-secondary-light h-full">
              <div className="text-2xl font-bold align-middle flex text-white p-4 items-center justify-evenly"> Add New Dive <PlusCircle/></div>
          </Card>
          </Link>
          <Link href="/new_log">
          <Card className="bg-accent text-center content-center hover:bg-secondary-light h-full">
              <div className="text-2xl font-bold align-middle flex text-white p-4 items-center justify-evenly">Something else <PlusCircle/></div>
          </Card>
          </Link>
          <Card>
            <CardHeader>
              <CardTitle>Total Dives </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">142</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Maximum Depth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">32.1 m</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Dive Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">124 hrs</div>
            </CardContent>
          </Card>
        </div>
        <div className="my-10 flex space-x-6 w-100">
          <Card className="flex-1 w-100">
            <CardHeader>
              <CardTitle>Recent Dives</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-5">
                <DiveCard />
                <DiveCard />
                <DiveCard />
                <DiveCard />
            </CardContent>
          </Card>
          
        </div>
      </main>
    </div>
  )
}