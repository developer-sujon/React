import React from "react";
import PropTypes from "prop-types";

function CheckBox(props) {
  const { name, label, skills, handleSkillsChange, error } = props;
  return (
    <div className="form-check form-check-inline">
      <input
        className={error ? "form-check-input is-invalid" : "form-check-input "}
        type="checkbox"
        name="skills"
        id={name}
        value={name}
        defaultChecked={skills.includes(name)}
        onChange={handleSkillsChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

CheckBox.defaultProps = {
  name: "",
  label: "",
};

export default CheckBox;
