'use client'

import { AlertError } from "@/components/ui/alert/index"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export const Form = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl')||'/dashboard'
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try{
            const res = await signIn('credentials', 
            {
            redirect: false,
            email, 
            password, 
            callbackUrl
            })
            if(!res.error){
                router.push(callbackUrl)
            } else{
                setError('Invalid email or password')
            }
        } catch(err:any){

        }
        
}
    return(
        <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                id='email' 
                type="email"
                required/>
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input 
                id='password' 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </div>
            {error && <AlertError>{error}</AlertError>}
            <div className="w-full">
            <Button  className="w-full size-lg">Login</Button>
            </div>
            
        </form>
    )
}
