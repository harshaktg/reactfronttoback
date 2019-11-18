import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Harsha',
          email: 'harshaktg@gmail.com',
          phone: '9876543210'
        },
        {
          id: 2,
          name: 'asdf',
          email: 'hasdf@asd.com',
          phone: '9898989898'
        },
        {
          id: 3,
          name: 'tyuioijuhg',
          email: 'wert@tyuio.com',
          phone: '0909896543'
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />
        })}
      </div>
    )
  };
};

export default Contacts;
