import * as React from 'react';
import { Card } from 'react-bootstrap';
import { IContact } from '../../../types/contactType';

export interface IAboutNavProps extends IContact {
}

export function AboutNav(props: IAboutNavProps) {
  return (
    <div>
      <Card.Title className="text-center">{props.name}</Card.Title>
      <Card.Text>
        <span className='fw-bold'>
          name:{' '}
        </span>
        {props.name}
      </Card.Text>
      <Card.Text>
        <span className='fw-bold'>
          username:{' '}
        </span>
        {props.username}
      </Card.Text>
      <Card.Text>
        <span className='fw-bold'>
          phone:{' '}
        </span>
        {props.phone}
      </Card.Text>
      <Card.Text className='mb-4'>
        <span className='fw-bold'>
          website:{' '}
        </span>
        <a href="#" target="_blank" rel="noopener noreferrer" onClick={()=> window.open("https://"+props.website, "_blank")}>
          {props.website}
        </a>

      </Card.Text>
    </div>
  );
}
