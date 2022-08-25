import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { AppRouter } from './components/AppRouter';
import { Spinner } from 'react-bootstrap';
import { Context } from '.';
import { check } from './http/userAPI';
import { IContext } from './types/contextTypes';


const App = observer(() => {

  const {userData} = useContext(Context) as IContext
  useEffect(()=>{
    // userData.setIsAuth(false)
  }, [userData.isAuth])

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
