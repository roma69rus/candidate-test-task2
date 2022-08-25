import * as React from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { Context } from 'src';
import { IContext } from 'src/types/contextTypes';
import { IContact } from '../../../types/contactType';
import { IUser } from '../../../types/userType';
import { CreateModal } from '../modal/CreateModal';
import { EditModal } from '../modal/EditModal';
import { AboutNav } from './AboutNav';
import { AddresNav } from './AddresNav';
import { CompanyNav } from './CompanyNav';

export interface IContactCardProps extends IContact {
  deleteContact(id: number): void;

}

export function ContactCard(props: IContactCardProps) {

  const [modalShow, setModalShow] = React.useState(false);
  const [navState, setNavState] = React.useState("About")
  const { contactsData } = React.useContext<IContext | null>(Context) as IContext

  return (
    <div>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link className={navState === "About" ? "active" : ""} onClick={() => setNavState("About")}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={navState === "Addres" ? "active" : ""} onClick={() => setNavState("Addres")}>Addres</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={navState === "Company" ? "active" : ""} onClick={() => setNavState("Company")}>Company</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          <div>
            {navState == "About" &&
              <AboutNav
                {...props}
              />
            }
            {navState == "Addres" &&
              <AddresNav
                {...props.address}
                titleName={props.name}
              />
            }
            {navState == "Company" &&
              <CompanyNav
                {...props.company}
                titleName={props.name}
              />
            }
          </div>
          <div className='d-flex justify-content-between'>
            <Button variant="primary" onClick={() => setModalShow(true)}>Open</Button>
            <Button variant="danger" onClick={() => {props.deleteContact(props.id)}}>Delete</Button>
          </div>

        </Card.Body>

      </Card>
      <EditModal
        {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  );
}
