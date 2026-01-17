"use server"
import bcrypt from 'bcrypt'
import User from "@/Model/User"
import { error } from "console"
import { redirect } from 'next/navigation'
import { ConnectToDatabase } from '@/lib/Database'

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
    const checkPassword = bcrypt.compare(password ,isExist.password)
    if(!checkPassword) {
        throw error('wrong password')
    }
    
    redirect('/dashboard')
}