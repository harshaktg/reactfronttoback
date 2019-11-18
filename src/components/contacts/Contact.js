import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faTimes } from '@fortawesome/free-solid-svg-icons';

// import './contact.css';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (payload, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    let showDetails = (<ul className='listgroup'>
      <li className='list-group-item'>Email : {email}</li>
      <li className='list-group-item'>Phone : {phone}</li>
    </ul>);
    showDetails = !this.state.showContactInfo ? null : showDetails;

    return (
      <Consumer>
        {value => {
          return (
            <div className='card card-body mb-3'>
              <h4>{name} <i style={{ cursor: 'pointer' }} onClick={this.onShowClick}><FontAwesomeIcon icon={faSortDown} /></i>
                <i style={{ cursor: 'pointer', color: 'red', float: 'right' }} onClick={(e, payload = id, action = value.dispatch) => this.onDeleteClick(payload, action)}><FontAwesomeIcon icon={faTimes} /></i></h4>
              {showDetails}
            </div>
          );
        }}
      </Consumer>
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
