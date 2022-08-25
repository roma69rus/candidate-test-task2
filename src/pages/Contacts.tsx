import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ContactList } from 'src/components/ContactList';
import { Context } from '..';
import { ContactCard } from '../components/UI/card/ContactCard';
import { CreateModal } from '../components/UI/modal/CreateModal';
import { getAllContacts } from '../http/contactsAPI';
import { IContact } from '../types/contactType';
import { IContext } from '../types/contextTypes';
import { LOGIN_ROUTE } from '../utils/consts';

interface IContactsProps {
}

export const Contacts = observer((props: IContactsProps) => {
  const { contactsData, userData } = React.useContext<IContext | null>(Context) as IContext
  const [modalCreate, setModalCreate] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('')

  const navigate = useNavigate()
  React.useEffect(() => {
    getAllContacts().then((data) => {
      contactsData.setContacts(data)
    })

  }, []);

  const deleteContact = (id:number) => {
   contactsData.deleteContact(id)
  }


  const searchedContacts = React.useMemo(() => {
    return contactsData.contacts.filter(cont => cont.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, contactsData.contacts, deleteContact])

  return (
    <Container>
      <Row className='justify-content-end'>
        <Col md={2}>
          <Button
            variant="danger"
            style={{ marginTop: "30px", marginBottom: "30px" }}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              userData.setIsAuth(false)
              userData.setUser({ email: '' })
              localStorage.removeItem('token')
              navigate(LOGIN_ROUTE, { replace: true })
              console.log(userData)
            }}
          >Выйти
          </Button>
        </Col>
      </Row>
      <Row>
        <Button
          variant="success"
          style={{ marginTop: "30px", marginBottom: "30px" }}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            setModalCreate(true)
          }}
        >Создать контакт
        </Button>
      </Row>
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Поиск"
            aria-label="Поиск"
            aria-describedby="basic-addon2"
            value={searchQuery}
            onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {
              setSearchQuery(event.target.value)
            }}
          />          
        </InputGroup>
      </div>

      {searchedContacts.length !== 0
        ? <ContactList 
          deleteContact={deleteContact}
          contacts={searchedContacts}
        />
        : <h1>Список контактов пуст</h1>
      }
      <CreateModal
        {...(contactsData.contacts[0])}
        show={modalCreate}
        onHide={() => setModalCreate(false)}
      />

    </Container>



  )
});

