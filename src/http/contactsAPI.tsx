import React from "react";
import { $authHost, $host } from ".";
import { Context } from "..";
import { IContact } from "../types/contactType";
import { IContext } from "../types/contextTypes";



export const createContacts = async (contact: IContact) => {
    console.log(contact)
    return contact
}

export const getAllContacts = async () => {
    const { data } = await $host.get<IContact[]>('users')
    return data
}

