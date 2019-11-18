import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    default:
      return state;
  }
};

export class Provider extends Component {
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
      ],
      dispatch: action => {
        return this.setState(state => reducer(state, action));
      }
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
};

export const Consumer = Context.Consumer; 