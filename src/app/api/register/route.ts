import { hash } from "bcrypt"
import { prisma } from "../../../../lib/prisma"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
try{
    const {name,email, password} = await request.json()
    const hashed = await hash(password, 12)

    const user = await prisma.user.create({
        data:{
            name,
            email,
            password: hashed,
        }
    })
    return NextResponse.json({
        user: {
            name: user.name,
            email: user.email,
        }
    })
} catch (err:any) {
    if (err.code === 'P2002') {
        // This error code indicates a uniqueness constraint violation
        return NextResponse.json({
            error: 'There is already an account with that email. Please login instead.',
        }, { status: 400 }); // Returning 400 Bad Request status to indicate a client error
    } else {
        // For other errors, return a generic error message
        return NextResponse.json({
            error: 'An unexpected error occurred. Please try again later.',
        }, { status: 500 }); // Returning 500 Internal Server Error status for other errors
    }
}

}