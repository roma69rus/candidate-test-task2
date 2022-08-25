import { Auth } from "./pages/Auth"
import { Contacts } from "./pages/Contacts"
import { CONTACTS_ROUTE, LOGIN_ROUTE} from "./utils/consts"

export const authRoutes = [
  {
    path: CONTACTS_ROUTE,
    Component: Contacts
  }
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  }
]