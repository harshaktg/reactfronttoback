import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e, dispatch) => {
    e.preventDefault();
    const newState = { ...this.state, id: uuid.v4() };
    dispatch({ type: 'ADD_CONTACT', payload: newState });
    // to clear state
    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className='card mb-3'>
              <div className="card-header">
                Add Contact
              </div>
              <div className="card-body">
                <form onSubmit={(e) => this.onSubmit(e, value.dispatch)}>
                  <TextInputGroup name='name' label='Name' placeholder='Enter name' value={name} onChange={this.onChange} />
                  <TextInputGroup name='email' label='Email' type='email' placeholder='Enter email' value={email} onChange={this.onChange} />
                  <TextInputGroup name='phone' label='Phone' placeholder='Enter phone' value={phone} onChange={this.onChange} />
                  <input type="submit" value="Add Contact" className="btn btn-block btn-light" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    )
  }
}

export default AddContact;
