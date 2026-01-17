"use server"

import { ConnectToDatabase } from "@/lib/Database"
import User from "@/Model/User"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers"
export const Register = async (formData : FormData) => {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    if(!name || !email || !password) return 
    await ConnectToDatabase()
    const isExist = await User.findOne({email})
    if(isExist) {
         throw new Error('User already Exist')
    }

    const hashPassword = bcrypt.hash(password as string  , 10)

    const user = await User.create({
        name,
        email,
        password : hashPassword
    })

    const token = jwt.sign(
        {id : user._id.toString()},
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

}