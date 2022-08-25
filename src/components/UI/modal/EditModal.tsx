import * as React from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { Context } from '../../..';
import { IContact } from '../../../types/contactType';
import { IContext } from '../../../types/contextTypes';

export interface IEditModalProps extends IContact {
  onHide: () => void;
  show: boolean;
}

export function EditModal(props: IEditModalProps) {
  const { contactsData } = React.useContext<IContext | null>(Context) as IContext
  const [contact, setContact] = React.useState<IContact>({
    "id": props.id,
    "name": props.name,
    "username": props.username,
    "email": props.email,
    "address": {
      "street": props.address.street,
      "suite": props.address.suite,
      "city": props.address.city,
      "zipcode": props.address.zipcode,
      "geo": props.address.geo
    },
    "phone": props.phone,
    "website": props.website,
    "company": props.company
  })

  return (
    <Modal
      show={props.show}
      onHide={() => props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" >
          Create new contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>About</h4>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Name"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, name: event.target.value })
              console.log(contact.name)
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            UserName
          </InputGroup.Text>
          <Form.Control
            aria-label="Name"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, username: event.target.value })
              console.log(contact.name)
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Phone
          </InputGroup.Text>
          <Form.Control
            aria-label="Phone"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.phone}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, phone: event.target.value })
              console.log(contact.name)
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            WebSite
          </InputGroup.Text>
          <Form.Control
            aria-label="WebSite"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.website}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, website: event.target.value })
              console.log(contact.name)
            }}
          />
        </InputGroup>

        <h4>Addres</h4>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            City
          </InputGroup.Text>
          <Form.Control
            aria-label="WebSite"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.address.city}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, address: { ...contact.address, city: event.target.value } })
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Street
          </InputGroup.Text>
          <Form.Control
            aria-label="WebSite"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.address.street}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, address: { ...contact.address, street: event.target.value } })
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Suite
          </InputGroup.Text>
          <Form.Control
            aria-label="WebSite"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.address.suite}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, address: { ...contact.address, suite: event.target.value } })
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            zipcode
          </InputGroup.Text>
          <Form.Control
            aria-label="WebSite"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.address.zipcode}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, address: { ...contact.address, zipcode: event.target.value } })
            }}
          />
        </InputGroup>

        <h4>Company</h4>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Company name
          </InputGroup.Text>
          <Form.Control
            aria-label="WebSite"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.company.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, company: { ...contact.company, name: event.target.value } })
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            CatchPhrase
          </InputGroup.Text>
          <Form.Control
            aria-label="WebSite"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.company.catchPhrase}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, company: { ...contact.company, catchPhrase: event.target.value } })
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            bs
          </InputGroup.Text>
          <Form.Control
            aria-label="WebSite"
            aria-describedby="inputGroup-sizing-default"
            defaultValue={props.company.bs}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContact({ ...contact, company: { ...contact.company, bs: event.target.value } })
            }}
          />
        </InputGroup>

      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide()
            console.log(contact)
            contactsData.updateContact(contact.id, contact)
            console.log("contactsData", contactsData.contacts)
          }}
          variant="success"
        >
          Save
        </Button>
        <Button
          onClick={props.onHide}
          variant="danger"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
