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

  deleteContact = (id) => {
    console.log(id);
    let newState = { ...this.state };
    const newArr = newState.contacts.filter(cont => cont.id !== id);
    newState.contacts = newArr;
    this.setState(newState);
  };

  render() {
    const { contacts } = this.state;
    return (
      // you can use fragements instead of div if you dont want to use div to render
      // <React.Fragment>
      <div>
        {contacts.map(contact => {
          return <Contact key={contact.id} contact={contact} deleteClickHandler={(e, id = contact.id) => this.deleteContact(id)} />
        })}
      </div>
      // </React.Fragment>
    )
  };
};

export default Contacts;
