import React from 'react';
import PropTypes from 'prop-types';


const TextInputGroup = (props) => {
  const { label, name, value, type, onChange, placeholder } = props;
  return (
    <div>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type} className="form-control form-control-lg" placeholder={placeholder} name={name} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
