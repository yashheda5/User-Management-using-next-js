'use client'
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addNewUserFormControls, addNewUserFormInitalState } from '@/utils'
import { addNewUserAction } from '@/actions'
export default function AddNewUser() {
    const [openPopup, setopenPopup] = useState(false);
    const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserFormInitalState);
    function handleSaveButtonValid(){
        return Object.keys(addNewUserFormData).every(key=>addNewUserFormData[key].trim() !== '');
    }

    async function handleAddNewUserAction(){
        const result= await addNewUserAction(addNewUserFormData);
        console.log(result);
    }
    console.log(addNewUserFormData)
    return (
        <div>
            <Button onClick={() => setopenPopup(true)}>Add New User</Button>
            <Dialog open={openPopup} onOpenChange={()=>{
                setopenPopup(false);
                setAddNewUserFormData(addNewUserFormInitalState);
            }}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                    </DialogHeader>
                    <form action={handleAddNewUserAction} className="grid gap-4 py-4">
                        <div className="">
                            {
                                addNewUserFormControls.map(ControlItem => <div className='mb-4' key={ControlItem.name}>
                                    <Label htmlFor={ControlItem.name} id={ControlItem.name} name={ControlItem.name} className="text-right">
                                        {ControlItem.label}
                                    </Label>
                                    <Input id={ControlItem.name} type={ControlItem.type} name={ControlItem.name} placeholder={ControlItem.placeholder} value={addNewUserFormData[ControlItem.name]} onChange={(event) => setAddNewUserFormData({
                                        ...addNewUserFormData,
                                        [ControlItem.name]: event.target.value
                                    })} className="col-span-3" />
                                </div>)
                            }

                        </div>
                        <DialogFooter>
                        <Button disabled={!handleSaveButtonValid()}
                        className="disabled:opacity-55"  type="submit">Save </Button>
                    </DialogFooter>
                    </form>
                  
                </DialogContent>
            </Dialog>
        </div>
    )
}
