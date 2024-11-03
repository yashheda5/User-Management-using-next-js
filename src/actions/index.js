"use server"

import connectToDb from "@/database"
import User from "@/models/user";

// Add new user action
export async function addNewUserAction(formData) {
    await connectToDb();
    try {
        const newlyCreatedUser = await User.create(formData);
        if (newlyCreatedUser) {
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