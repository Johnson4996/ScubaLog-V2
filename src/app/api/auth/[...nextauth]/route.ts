import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../../lib/prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    session:{
        strategy: "jwt",
    },
    providers:[
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email:{
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@example.com'
                },
                password:{label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                //Handle auth
                if(!credentials.email || !credentials.password){
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if(!user){
                    return null
                }
                const isPasswordValid = await compare(credentials.password,user.password)

                if(!isPasswordValid){
                    return null
                }
                return {
                    id: user.id + '',
                    email: user.email,
                    name: user.name,
                    randomKey: 'randomValue'
                }
            }
        })
    ],
    callbacks: {
        session: ({session,token}) =>{
            console.log('Session callback', {session, token})
            return{
                ...session,
                user:{
                    ...session.user,
                    id: token.id,
                    randomeKey: token.randomeKey
                }
            }
        },
        jwt: ({token, user}) =>{
            console.log('JWT callback', {token, user})
            
            if(user){
                const u = user as unknown as any
                return {
                    ...token,
                    id: user.id,
                    randomeKey: u.randomKey
                }
            }
            return token
        }
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}
