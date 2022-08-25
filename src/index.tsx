import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContactsStore from './store/ContactStore';
import UserStore from './store/UserStore';
import { IContext } from './types/contextTypes';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Context = createContext<IContext | null>(null)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{
    userData: new UserStore(),
    contactsData: new ContactsStore()
  }}>
    <App />

  </Context.Provider>

);

