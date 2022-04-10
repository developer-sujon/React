import React from "react";
import PropTypes from "prop-types";

function InputElement(props) {
  const { type, name, placeholder, label, value, handleChange, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        id={name}
        className={error ? "form-control is-invalid" : "form-control "}
      />
      {error && <span className="invalid-feedback">{error}</span>}
    </div>
  );
}

InputElement.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

InputElement.defaultProps = {
  type: "text",
  name: "text",
  placeholder: "Someting...",
  label: "Someting",
};

export default InputElement;
