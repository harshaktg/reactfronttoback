import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Header = props => {
  const { branding } = props;
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>{branding}</Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} /> Home</Link>
            </li>
            <li className="nav-item">
              <NavLink to="/contact/add" className="nav-link">
                <FontAwesomeIcon icon={faPlus} /> Add contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                <FontAwesomeIcon icon={faQuestion} /> About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Default props
Header.defaultProps = {
  branding: 'My App'
};

// Prop Type validation
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// // Styling
// const headingStyle = {
//   color: 'red',
//   fontSize: '50px'
// }
export default Header;