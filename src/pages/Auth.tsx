import * as React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card"
import { login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom'
import { CONTACTS_ROUTE } from '../utils/consts';
import { Context } from '..';
import { IContext } from '../types/contextTypes';


export interface IAuthProps {
}

export const Auth = observer((props: IAuthProps) => {

  const { userData } = React.useContext(Context) as IContext
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()

  const signIn = async () => {
    const response = await login(email, password);
    userData.setUser({ email: response })
    userData.setIsAuth(true) 
    navigate(CONTACTS_ROUTE)
  }



  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className='m-auto'>Авторизация</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-2'
            placeholder='Введите ваш email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value)
            }}
            type="email"
          />
          <Form.Control
            className='mt-2'
            placeholder='Введите ваш пароль'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value)
            }}
            type="password"
          />
          <Button
            className='mt-3 align-self-end'
            variant='outline-secondary'
            onClick={() => signIn()}
          >
            Войти
          </Button>
          <div>
            isAuth: {userData.isAuth.toString()}           
          </div>
        </Form>
      </Card>
    </Container>
  );
})




