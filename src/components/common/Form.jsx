import React, { useState } from 'react';
import './Form.scss';

const Form = ({ children, onFinish, layout, className }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFinish(formValues);
  };

  return (
    <form className={`form ${layout} ${className}`} onSubmit={handleSubmit}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onChange: handleChange,
          formValues,
        })
      )}
    </form>
  );
};

export const FormItem = ({ label, name, rules, children, onChange, formValues }) => {
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    onChange(name, value);

    if (rules) {
      const rule = rules.find((rule) => rule.required && !value);
      setError(rule ? rule.message : null);
    }
  };

  return (
    <div className="form-item">
      <label className="form-item__label">{label}</label>
      <div className="form-item__input-wrapper">
        {React.cloneElement(children, {
          value: formValues[name] || '',
          onChange: handleInputChange,
        })}
      </div>
      {error && <div className="form-item__error">{error}</div>}
    </div>
  );
};
export default Form;