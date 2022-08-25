import { makeAutoObservable } from "mobx";
import { IUserStore } from "../types/contextTypes";
import { IUser } from "../types/userType";


export default class UserStore implements IUserStore {
  private _isAuth: boolean;
  private _user: IUser | null;
  constructor() {
    this._isAuth = false;
    this._user = null;
    makeAutoObservable(this)
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool
  }

  setUser(user: IUser) {
    this._user = user  
  }

  get isAuth() {
    return this._isAuth
  }

  get user(): IUser {
    return this._user as IUser
  }
}
