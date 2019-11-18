import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e, dispatch) => {
    e.preventDefault();
    const newState = { ...this.state };

    // check for errors
    if (newState.name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (newState.email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (newState.phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const response = await axios.put(`http://jsonplaceholder.typicode.com/users/${newState.id}`, newState);
    dispatch({ type: 'EDIT_CONTACT', payload: response.data });

    // to clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    // to redirect to home page
    this.props.history.push('/');
  };

  async componentDidMount() {
    const { id } = this.props.match.params
    const response = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
    this.setState(response.data);
  }

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className='card mb-3'>
              <div className="card-header">
                Edit Contact
              </div>
              <div className="card-body">
                <form onSubmit={(e) => this.onSubmit(e, value.dispatch)}>
                  <TextInputGroup name='name' label='Name' placeholder='Enter name' value={name} onChange={this.onChange} error={errors.name} />
                  <TextInputGroup name='email' label='Email' type='email' placeholder='Enter email' value={email} onChange={this.onChange} error={errors.email} />
                  <TextInputGroup name='phone' label='Phone' placeholder='Enter phone' value={phone} onChange={this.onChange} error={errors.phone} />
                  <input type="submit" value="Update Contact" className="btn btn-block btn-light" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    )
  }
}

export default EditContact;
