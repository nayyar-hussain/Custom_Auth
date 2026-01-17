"use server"
import User from '@/Model/User';
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";

export const DocodeToken = async () => {
    
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value;

  if(!token) return null

  const decodeId = jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET!) as{id : string}
  const userId = decodeId.id

  const user = await User.findOne({_id : userId})
  return user

} 