import React from "react";
import PropTypes from "prop-types";

function Radio(props) {
  const { label, value, handleChange, error } = props;
  return (
    <div className="form-check form-check-inline">
      <input
        className={error ? "form-check-input is-invalid" : "form-check-input"}
        type="radio"
        name="gender"
        id={value}
        value={value}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={value}>
        {label}
      </label>
    </div>
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  name: "",
  label: "",
};

export default Radio;
