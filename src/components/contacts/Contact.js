import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

// import './contact.css';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (payload, dispatch) => {
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${payload}`);
    } catch (e) {
      throw e;
    } finally {
      dispatch({ type: 'DELETE_CONTACT', payload });
    }

  };

  onEditClick = (id) => {
    console.log(id);
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
                <i style={{ cursor: 'pointer', color: 'red', float: 'right' }} onClick={(e, payload = id, action = value.dispatch) => this.onDeleteClick(payload, action)}><FontAwesomeIcon icon={faTimes} /></i>
                <Link to={`/contact/edit/${id}`}><i style={{ cursor: 'pointer', color: 'black', float: 'right', marginRight: '1rem' }}   ><FontAwesomeIcon icon={faPen} /></i></Link>
              </h4>
              {showDetails}
            </div>
          );
        }}
      </Consumer>
    );
  };
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
