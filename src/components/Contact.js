import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

// import './contact.css';

class Contact extends Component {
  onShowClick = (e, name) => {
    console.log(e.currentTarget);
    console.log(name);
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h4>{name} <i onClick={(e, arg = name) => this.onShowClick(e, arg)}><FontAwesomeIcon icon={faSortDown} /></i></h4>
        <ul className='listgroup'>
          <li className='list-group-item'>Email : {email}</li>
          <li className='list-group-item'>Phone : {phone}</li>
        </ul>
      </div>
    )
  }
}

Contact.defaultProps = {
  name: 'Your Name',
  phone: '9876543210',
  email: 'name@email.com'
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Contact;
