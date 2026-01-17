import DashboardUserList from '@/Component/DashboardUserList'
import User from '@/Model/User'
import { IUser, IUserDocu } from '@/types/User-type'
import React from 'react'

async function page() {

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