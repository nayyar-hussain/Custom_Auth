import DashboardUserList from '@/Component/DashboardUserList'
import { ConnectToDatabase } from '@/lib/Database'
import User from '@/Model/User'
import { IUser, IUserDocu } from '@/types/User-type'
import React from 'react'

export const dynamic = 'force-dynamic'

async function page() {
 await ConnectToDatabase()
  const userDoc = await User.find()
  const user : IUser[] = userDoc.map((u : IUserDocu) => ({
    _id : u._id.toString(),
    name : u.name,
    email : u.email,
    password : u.password
  }))
  return (
    <>
    <DashboardUserList user={user}/>
    </>
  )
}

export default page