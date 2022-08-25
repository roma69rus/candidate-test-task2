import { makeAutoObservable } from "mobx";
import { IContact } from "../types/contactType";
import { IContactsStore } from "../types/contextTypes";


export default class ContactsStore implements IContactsStore {
  private _contacts: IContact[];
  constructor() {
    this._contacts = [];
    makeAutoObservable(this)
  }

  setContacts(contacts: IContact[]) {
    this._contacts = contacts;
  }

  createNewContact(contact: IContact) {
    this._contacts.push(contact);
  }

  updateContact(id: number, contact: IContact) {
    const NewContactsArray = this._contacts
    NewContactsArray.forEach(function (item, i, arr) {
      if (item.id == id) {
        NewContactsArray[i] = { ...contact} // Новый объект с новыми свойствами        
      }
    })
  }
  
  deleteContact(id: number) {
    const NewContactsArray = this._contacts
    NewContactsArray.forEach(function (item, i, arr) {
      if (item.id == id) {
        NewContactsArray.splice(i, 1)     
      }
    })
  }



  setContact(contact: IContact) {
    this._contacts.push(contact);
  }


  get contacts(): IContact[] {
    return this._contacts
  }



}
