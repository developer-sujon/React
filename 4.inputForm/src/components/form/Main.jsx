import React, { Component } from "react";
import Form from "./Form";

const initValue = {
  name: "",
  email: "",
  number: "",
  gender: "",
  bio: "",
  birthday: "",
};

class Main extends Component {
  state = {
    values: initValue,
    skills: [],
    agrements: false,
    errors: {},
  };

  handleChange = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSkillsChange = (e) => {
    if (e.target.checked) {
      this.setState({
        skills: [...this.state.skills, e.target.value],
      });
    } else {
      const unSelectedSkill = this.state.skills.filter(
        (skill) => skill !== e.target.value,
      );

      this.setState({
        skills: unSelectedSkill,
      });
    }
  };

  handleAgrements = (e) => {
    this.setState({
      agrements: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { isvalid, errors } = this.validation();

    if (!isvalid) {
      this.setState({ errors });
    } else {
      this.props.createUser(this.state);
      e.target.reset();
      this.setState({
        values: initValue,
        skills: [],
        agrements: false,
      });
    }
  };

  validation = (e) => {
    const errors = {};
    const {
      values: { name, email, number, gender, bio, birthday },
      skills,
    } = this.state;

    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!number) {
      errors.number = "Number is required";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!bio) {
      errors.bio = "Bio is required";
    }
    if (!birthday) {
      errors.birthday = "Birthday is required";
    }

    if (skills.length === 0) {
      errors.skill = "skills is required";
    }

    return {
      isvalid: Object.keys(errors).length === 0,
      errors,
    };
  };

  render() {
    const { values, agrements, skills, errors } = this.state;

    return (
      <Form
        handleChange={this.handleChange}
        values={values}
        agrements={agrements}
        skills={skills}
        handleSkillsChange={this.handleSkillsChange}
        handleAgrements={this.handleAgrements}
        handleSubmit={this.handleSubmit}
        errors={errors}
      />
    );
  }
}

export default Main;
