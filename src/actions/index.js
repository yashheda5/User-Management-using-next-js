"use server"

import connectToDb from "@/database"
import User from "@/models/user";
import { revalidatePath } from "next/cache";

// Add new user action
export async function addNewUserAction(formData, pathtorevalidate) {
    await connectToDb();
    try {
        const newlyCreatedUser = await User.create(formData);
        if (newlyCreatedUser) {
            revalidatePath(pathtorevalidate)
            return {
                success: true,
                message: "User created successfully",
            };
        } else {
            return {
                success: false,
                message: 'Some error occurred! Try again',
            };
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            message: 'Some error occurred! Try again.',
        };
    }
}
//fetch user action

export async function fetchUserAction() {
    await connectToDb();
    try {
        const listOfUsers = await User.find({});
        if (listOfUsers) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(listOfUsers))
            }
        } else {
            return {
                success: false,
                message: 'Some error occurred! Try again.',
            };
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            message: 'Some error occurred! Try again.',
        };
    }
}
// delete user action
export async function deleteUserAction(currentUserID, pathtorevalidate) {
    await connectToDb();
    try {
        const deletedUser=await User.findByIdAndDelete(currentUserID);
        if(deletedUser){
            revalidatePath(pathtorevalidate);
            return {
                success: true,
                message: "User deltee successfully",
            };
        }else{
            return {
                success: false,
                message: 'not able to perform delete operation',
            };
        }
    } catch (e) {
         console.log(e);
        return {
            success: false,
            message: 'Some error occurred! Try again.',
        };
    }
}

//edit user action

export async function editUserAction(currentUserID, formData, pathtorevalidate) {
    await connectToDb();
    try{
        const {firstName,lastName,email,address}=formData;
        const updatedUser =await User.findByIdAndUpdate({
            _id: currentUserID
        },{firstName,lastName,email,address},{new :true});
        if(updatedUser){
            revalidatePath(pathtorevalidate);
            return {
                success:true,
                message: 'User updated successfully'
            }
        }else{
            return {
                success: false,
                message: 'Some error occurred! Try again.',
            };
        }
    }catch (e) {
        console.log(e);
        return {
            success: false,
            message: 'Some error occurred! Try again.',
        };
    }
}