"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import React, { useContext } from 'react'
import { Button } from "../ui/button"
import { deleteUserAction } from "@/actions"
import { UserContext } from "@/context"
export default function SingleUserCard({ user }) {

    const {setopenPopup,setAddNewUserFormData,setCurrentEditedID} =useContext(UserContext)

    async function handleDelete(getCurrentUserID){
        const result=await deleteUserAction(getCurrentUserID,'/user-management');
        console.log(result);
    }
    async function handleEdit(getCurrentUser){
        setopenPopup(true);
        setAddNewUserFormData({
            firstName:getCurrentUser?.firstName,
            lastName:getCurrentUser?.lastName,
            email:getCurrentUser?.email,
            address:getCurrentUser?.address
        })
        setCurrentEditedID(getCurrentUser?._id)
    }
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{user?.firstName}</CardTitle>
                    <CardDescription>{user?.email}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{user?.address}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={()=>handleEdit(user)}>Edit</Button>
                    <Button onClick={()=>handleDelete(user?._id)}>Delete</Button>
                </CardFooter>
            </Card>

        </div>
    )
}
