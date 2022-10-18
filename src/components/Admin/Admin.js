import axios from "axios";
import React, { Component } from "react";
import Student from "../Student/Student";
import style from "./admin.module.css";

class Admin extends Component {
  // State for the input fields
  state = {
    oldName: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    country: "",
    mobile: "",
    updateFirstName: "",
    updateLastName: "",
    updateEmail: "",
    updateMobile: "",
  };

  // function handles first name Change event
  handleFirstNameChange = (e) => {
    const value = e.target.value;
    this.setState({ firstName: value.trim() });
  };

  // function handles last name Change event
  handleLastNameChange = (e) => {
    const value = e.target.value;
    this.setState({ lastName: value.trim() });
  };

  // function handles gender Change event
  handleGenderChange = (e) => {
    const value = e.target.value;
    this.setState({ gender: value.trim() });
  };

  // function handles email Change event
  handleEmailChange = (e) => {
    const value = e.target.value;
    this.setState({ email: value.trim() });
  };

  // function handles country Change event
  handleCountryChange = (e) => {
    const value = e.target.value;
    this.setState({ country: value.trim() });
  };

  // function handles mobile Change event
  handleMobileChange = (e) => {
    const value = e.target.value;
    this.setState({ mobile: value.trim() });
  };

  // function handles old name for update details
  handleOldNameChange = (e) => {
    const value = e.target.value;
    this.setState({ oldName: value.trim() });
  };

  // function handles first name update
  handleUpdateFirstNameChange = (e) => {
    const value = e.target.value;
    this.setState({ updateFirstName: value.trim() });
  };

  // function handles last name update
  handleUpdateLastNameChange = (e) => {
    const value = e.target.value;
    this.setState({ updateLastName: value.trim() });
  };

  // function handles email update
  handleUpdateEmailChange = (e) => {
    const value = e.target.value;
    this.setState({ updateEmail: value.trim() });
  };

  // function handles mobile update
  handleUpdateMobileChange = (e) => {
    const value = e.target.value;
    this.setState({ updateMobile: value.trim() });
  };

  // onClick handler to Insert data of the Student
  sendData = () => {
    const { firstName, lastName, gender, email, country, mobile } = this.state;

    // validation checkpoint for the input fields
    if (!firstName || !lastName || !gender || !email || !country || !mobile) {
      alert("Please fill in all the fields");
      return;
    }

    // API request to send the data for insertion
    axios
      .post("http://127.0.0.1:5000/create", {
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        email: email,
        country: country,
        mobile: mobile,
      })
      .then((response) => {
        this.setState({
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          country: "",
          mobile: "",
        });
        alert(
          "Student " + firstName + " " + lastName + " inserted successfully"
        );
      })
      .catch((err) => {});
  };

  // onClick handler to Update data of the Student
  updateData = () => {
    const {
      oldName,
      updateFirstName,
      updateLastName,
      updateEmail,
      updateMobile,
    } = this.state;

    // validation checkpoint for the input fields
    if (
      !oldName ||
      !updateFirstName ||
      !updateLastName ||
      !updateEmail ||
      !updateMobile
    ) {
      alert("Please fill in all the fields");
      return;
    }

    // API request to send the data for update
    axios
      .put(`http://127.0.0.1:5000/update/${oldName}`, {
        first_name: updateFirstName,
        last_name: updateLastName,
        email: updateEmail,
        mobile: updateMobile,
      })
      .then((response) => {
        this.setState({
          updateFirstName: "",
          updateLastName: "",
          updateEmail: "",
          updateMobile: "",
        });
        alert(
          "Student details of " + updateFirstName + " updated successfully to "
        );
      })
      .catch((err) => {});
  };

  render() {
    console.log({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      email: this.state.email,
      country: this.state.country,
      mobile: this.state.mobile,
    });
    return (
      <>
        <div className={style.row}>
          <div className={style.column}>
            <div className={style.add}>
              <p className={style.p}>add student details</p>
              <div className={style.inputBox}>
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={(e) => this.handleFirstNameChange(e)}
                  required="required"
                />
                <span>First Name</span>
              </div>
              <div className={style.inputBox}>
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={(e) => this.handleLastNameChange(e)}
                  required="required"
                />
                <span>Last Name</span>
              </div>
              <div className={style.inputBox}>
                <input
                  type="text"
                  value={this.state.gender}
                  onChange={(e) => this.handleGenderChange(e)}
                  required="required"
                />
                <span>Gender</span>
              </div>
              <div className={style.inputBox}>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={(e) => this.handleEmailChange(e)}
                  required="required"
                />
                <span>Email</span>
              </div>
              <div className={style.inputBox}>
                <input
                  type="text"
                  value={this.state.country}
                  onChange={(e) => this.handleCountryChange(e)}
                  required="required"
                />
                <span>Country</span>
              </div>
              <div className={style.inputBox}>
                <input
                  type="tel"
                  value={this.state.mobile}
                  onChange={(e) => this.handleMobileChange(e)}
                  required="required"
                />
                <span>Mobile</span>
              </div>
              <button className={style.button} onClick={() => this.sendData()}>
                submit
              </button>
            </div>
          </div>

          <div className={style.column}>
            <div className={style.update}>
              <p className={style.p}>update student details</p>
              <div className={style.inputBox}>
                <input
                  type="text"
                  value={this.state.oldName}
                  onChange={(e) => this.handleOldNameChange(e)}
                  required="required"
                />
                <span>Enter your Previous Name</span>
              </div>
              <div className={style.inputBox}>
                <input
                  type="text"
                  value={this.state.updateName}
                  onChange={(e) => this.handleUpdateFirstNameChange(e)}
                  required="required"
                />
                <span>first name</span>
              </div>
              <div className={style.inputBox}>
                <input
                  type="text"
                  value={this.state.updateName}
                  onChange={(e) => this.handleUpdateLastNameChange(e)}
                  required="required"
                />
                <span>last name</span>
              </div>
              <div className={style.inputBox}>
                <input
                  type="text"
                  value={this.state.updateName}
                  onChange={(e) => this.handleUpdateEmailChange(e)}
                  required="required"
                />
                <span>email</span>
              </div>
              <div className={style.inputBox}>
                <input
                  type="text"
                  value={this.state.updateName}
                  onChange={(e) => this.handleUpdateMobileChange(e)}
                  required="required"
                />
                <span>mobile</span>
              </div>
              <button
                className={style.button}
                onClick={() => this.updateData()}
              >
                update
              </button>
            </div>
          </div>
        </div>
        <Student />
      </>
    );
  }
}

export default Admin;
