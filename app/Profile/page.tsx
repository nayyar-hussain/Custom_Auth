import React from 'react'
import { DocodeToken } from '../server.action/TokenDecode'

async function page() {
    const user = await DocodeToken()
    if(!user) {
        return <h1>No LogedIn</h1>
    }
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
    </div>
  )
}

export default page