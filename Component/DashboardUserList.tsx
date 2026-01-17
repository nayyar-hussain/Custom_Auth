
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { IUser } from '@/types/User-type'
import React from 'react'

interface IUserProps {
    user : IUser[]
}

function DashboardUserList({user} : IUserProps) {
  return (
    <div>
        <Table>
            <TableCaption>List Of Users</TableCaption>
            <TableHeader>
                <TableRow >
                    {
                        ['ID', "Name", 'Email', "Password"].map((head) => (

                            <TableHead className='text-center'>{head}</TableHead>
                           
                        ))
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                {user.map((u) => (

                <TableRow className='text-center'>
                    <TableCell>{u._id}</TableCell>
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.password}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default DashboardUserList