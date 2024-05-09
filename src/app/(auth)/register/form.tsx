'use client'

import {AlertError} from "@/components/ui/alert/index"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useState } from "react"

export const RegisterForm = () => {
const [email, setEmail] = useState('')
const [password,setPassword] = useState('')
const [name, setName] = useState('')
const [error, setError] = useState<Error | null>(null)

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try{
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({name,email, password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if(res.ok){
               signIn()
            } else {
                setError((await res.json()).error)
            }
        } catch (error:any) {
            setError(error?.message)
        }
        
    }
    return (
        <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                id='name' 
                type="text"
                required/>
            </div>
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
            <Button  className="w-full size-lg">Register</Button>
            </div>
            
        </form>
    )
}