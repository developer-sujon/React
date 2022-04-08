import React from "react";
import PropTypes from "prop-types";

function TextArea(props) {
  const { name, label, handleChange, value, error } = props;

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        className={error ? "form-control is-invalid" : "form-control "}
        rows="4"
        placeholder="Enter Your Message"
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
      />

      {error && <span className="invalid-feedback">{error}</span>}
    </div>
  );
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

TextArea.defaultProps = {
  name: "",
  label: "",
};

export default TextArea;
