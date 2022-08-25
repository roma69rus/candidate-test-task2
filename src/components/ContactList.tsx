import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Context } from 'src';
import { IContact } from 'src/types/contactType';
import { IContext } from 'src/types/contextTypes';
import { ContactCard } from './UI/card/ContactCard';

export interface IContactListProps {
  contacts: IContact[]
  deleteContact(id: number): void;
}

export function ContactList ({contacts, deleteContact}: IContactListProps) {
  return (
    <div>
      {contacts.map((contact: IContact) => {
        return (
          <Row key={contact.id} className='justify-content-md-center mb-4'>
            <Col md={12}>
              <ContactCard
              deleteContact={deleteContact}
                {...contact}
              />
            </Col>
          </Row>

        )
      })

      }
    </div>
  );
}
