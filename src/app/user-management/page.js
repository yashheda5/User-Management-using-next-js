
import React from 'react'
import AddNewUser from '@/components/add-new-user'
import { fetchUserAction } from '@/actions'
import SingleUserCard from '@/components/single-user';

 export  default async function UserManagement() {
  const getListOfUsers = await fetchUserAction();
  console.log(getListOfUsers);
  return (
    <div className='p-20 max-w-6xl mx-auto'>
      <div className='flex justify-between'>
        <h1>User Management</h1>
        <AddNewUser/>
      </div>
      <div className='mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
      {
        getListOfUsers && getListOfUsers.data && getListOfUsers.data.length >0 ?
        getListOfUsers.data.map(userItem =><SingleUserCard user={userItem} />) : <h3>No users Found ! Please create one</h3>
      }
      </div>

    </div>
  )
}
