import { IContact } from "./contactType";
import { IUser } from "./userType";


export interface IContext {
  userData: IUserStore;
  contactsData: IContactsStore;
}

export interface IUserStore {
  isAuth: boolean;
  user: IUser;
  setIsAuth(bool: boolean): void;
  setUser(user: IUser): void;
}


export interface IContactsStore{
  contacts: IContact[];
  setContacts(contacts: IContact[]): void;
  setContact(contact: IContact): void;
  createNewContact(contact: IContact): void;
  updateContact(id: number, contact: IContact): void;
  deleteContact(id: number): void;
}