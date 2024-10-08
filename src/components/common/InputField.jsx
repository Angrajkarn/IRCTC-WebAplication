import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';

const InputField = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  error,
  icon: Icon,
  as: ElementType = 'input',
  options,
  children
}) => {
  // Only render onChange if it's provided
  const inputProps = {
    id: name,
    type,
    className: 'input-field__input',
    placeholder,
    value,
    onChange,
    name
  };

  return (
    <div className={`input-field ${error ? 'input-field--error' : ''}`}>
      {label && <label htmlFor={name} className="input-field__label">{label}</label>}
      <div className="input-field__wrapper">
        {Icon && <Icon className="input-field__icon" />}
        {ElementType === 'input' ? (
          <input {...inputProps} />
        ) : ElementType === 'select' ? (
          <select {...inputProps}>
            {options}
          </select>
        ) : (
          children
        )}
      </div>
      {error && <p className="input-field__error">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  icon: PropTypes.elementType,
  as: PropTypes.elementType,
  options: PropTypes.arrayOf(PropTypes.element),
  children: PropTypes.node,
};

export default InputField;
