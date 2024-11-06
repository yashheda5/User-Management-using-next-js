'use client'
import { addNewUserFormInitalState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext =createContext(null);

export default function UserState({children}){
    const [openPopup, setopenPopup] = useState(false);
    const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserFormInitalState);
    const [currentEditedID,setCurrentEditedID] = useState(null);
    return <UserContext.Provider value={{currentEditedID,setCurrentEditedID,openPopup, setopenPopup,addNewUserFormData, setAddNewUserFormData}}>{children}</UserContext.Provider>
}