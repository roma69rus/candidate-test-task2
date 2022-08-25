import { resolve } from "node:path/win32";
import { $authHost, $host } from ".";



export const login = async (email: string, password: string) => {

    const token: string = email
    localStorage.setItem('token', token)
    return email

}

export const check = async () => {
    return localStorage.getItem('token') as string
}