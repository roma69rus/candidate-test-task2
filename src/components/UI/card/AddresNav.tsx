import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Address } from '../../../types/contactType';

export interface IAddresNavProps extends Address {
  titleName: string
}

export function AddresNav(props: IAddresNavProps) {
  return (
    <div>
      <Card.Title className="text-center">{props.titleName}</Card.Title>
      <Card.Text>
        <span className='fw-bold'>
          city{' '}
        </span>
        {props.city}
      </Card.Text>
      <Card.Text>
        <span className='fw-bold'>
          street{' '}
        </span>
        {props.street}
      </Card.Text>
      <Card.Text>
        <span className='fw-bold'>
          suite{' '}
        </span>
        {props.suite}
      </Card.Text>
      <Card.Text className='mb-4'>
        <span className='fw-bold'>
          zipcode{' '}
        </span>
        {props.zipcode}
      </Card.Text>
    </div>
  );
}
