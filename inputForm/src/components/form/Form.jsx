import React, { Component } from "react";
import CheckBox from "./CheckBox";
import InputElement from "./InputElement";
import Radio from "./Readio";
import TextArea from "./TextArea";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <InputElement
          name="name"
          placeholder="Enter Your Name"
          label="Name"
          handleChange={this.props.handleChange}
          value={this.props.values.name}
          error={this.props.errors.name}
        />
        <InputElement
          type="email"
          name="email"
          placeholder="Enter Your Email"
          label="Email"
          handleChange={this.props.handleChange}
          value={this.props.values.email}
          error={this.props.errors.email}
        />
        <InputElement
          type="date"
          name="birthday"
          label="Birthday"
          handleChange={this.props.handleChange}
          value={this.props.values.birthday}
          error={this.props.errors.birthday}
        />
        <InputElement
          type="number"
          name="number"
          placeholder="Enter Your Number"
          label="Number"
          handleChange={this.props.handleChange}
          value={this.props.values.number}
          error={this.props.errors.number}
        />
        <Radio
          value="male"
          label="Male"
          handleChange={this.props.handleChange}
          error={this.props.errors.gender}
        />
        <Radio
          value="female"
          label="Female"
          handleChange={this.props.handleChange}
          error={this.props.errors.gender}
        />
        <Radio
          value="other"
          label="Other"
          handleChange={this.props.handleChange}
          error={this.props.errors.gender}
        />

        <br />

        <CheckBox
          name="javascript"
          label="JavaScript"
          skills={this.props.skills}
          handleSkillsChange={this.props.handleSkillsChange}
          error={this.props.errors.skill}
        />
        <CheckBox
          name="react"
          label="React Js"
          skills={this.props.skills}
          handleSkillsChange={this.props.handleSkillsChange}
          error={this.props.errors.skill}
        />
        <CheckBox
          name="node"
          label="Node Js"
          skills={this.props.skills}
          handleSkillsChange={this.props.handleSkillsChange}
          error={this.props.errors.skill}
        />
        <CheckBox
          name="express"
          label="Express Js"
          skills={this.props.skills}
          handleSkillsChange={this.props.handleSkillsChange}
          error={this.props.errors.skill}
        />

        <TextArea
          name="bio"
          label="Bio"
          handleChange={this.props.handleChange}
          value={this.props.values.bio}
          error={this.props.errors.bio}
        />

        <div className="form-check form-check-inline my-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="agrements"
            id="agrements"
            checked={this.props.agrements}
            onChange={this.props.handleAgrements}
          />
          <label className="form-check-label" htmlFor="agrements">
            I agre
          </label>
        </div>
        <button
          disabled={!this.props.agrements}
          type="submit"
          className="btn btn-primary w-100"
        >
          Create New
        </button>
      </form>
    );
  }
}

export default Form;
