import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Company } from '../../../types/contactType';

export interface ICompanyNavProps extends Company {
  titleName: string
}

export function CompanyNav(props: ICompanyNavProps) {
  return (
    <div>
      <Card.Title className="text-center">{props.titleName}</Card.Title>
      <Card.Text>
        <span className='fw-bold'>
          name{' '}
        </span>
        {props.name}
      </Card.Text>
      <Card.Text>
        <span className='fw-bold'>
          catchPhrase{' '}
        </span>
        {props.catchPhrase}
      </Card.Text>
      <Card.Text className='mb-4'>
        <span className='fw-bold'>
          bs{' '}
        </span>
        {props.bs}
      </Card.Text>
    </div>
  );
}
