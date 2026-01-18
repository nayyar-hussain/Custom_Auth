"use server"
import bcrypt from 'bcrypt'
import User from "@/Model/User"
import { error } from "console"
import { redirect } from 'next/navigation'
import { ConnectToDatabase } from '@/lib/Database'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
export const Login = async (formData : FormData) =>{
    const email = formData.get('email')as string
    const password = formData.get('password')as string

    if(!email || !password) {
         throw error("Fields required")
    }

    await ConnectToDatabase()
    const isExist = await User.findOne({email})
    if(!isExist){
        throw error('First create your account')
    }
    const checkPassword = await bcrypt.compare(password ,isExist.password)
    if(!checkPassword) {
        throw error('wrong password')
    }

    const token = jwt.sign(
        {id : isExist._id.toString()},
        process.env.JSON_WEB_TOKEN_SECRET!,
        {expiresIn : '7d'}
    )

    const cookieStore = await cookies()
    cookieStore.set('token', token , {
        httpOnly : true,
        secure : process.env.NODE_ENV === 'production',
        sameSite : 'lax',
        path : '/'
    })
    
    redirect('/dashboard')
}