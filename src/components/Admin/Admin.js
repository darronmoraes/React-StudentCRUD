import axios from "axios";
import React, { Component } from "react";

class Admin extends Component {
  // State for the input fields
  state = {
    oldName: "",
    name: "",
    email: "",
  };

  // function for Name Change event
  handleNameChange = (e) => {
    const value = e.target.value;
    this.setState({ name: value.trim() });
  };

  // function for Old Name Change event
  handleOldNameChange = (e) => {
    const value = e.target.value;
    this.setState({ oldName: value.trim() });
  };

  // function for Email Change event
  handleEmailChange = (e) => {
    const value = e.target.value;
    this.setState({ email: value.trim() });
  };

  // onClick handler to Insert data of the Student
  sendData = () => {
    const { name, email } = this.state;

    // validation checkpoint for the input fields
    if (!name || !email) {
      alert("Please fill in all the fields");
      return;
    }

    // API request to send the data for insertion
    axios
      .post("http://127.0.0.1:5000/create", { email: email, user_name: name })
      .then((response) => {
        this.setState({ email: "", name: "" });
      })
      .catch((err) => {});
  };

  // onClick handler to Update data of the Student
  updateData = () => {
    const { oldName, name, email } = this.state;

    // validation checkpoint for the input fields
    if (!name || !email || !oldName) {
      alert("Please fill in all the fields");
      return;
    }

    // API request to send the data for update
    axios
      .put(`http://127.0.0.1:5000/update/${oldName}`, {
        email: email,
        user_name: name,
      })
      .then((response) => {
        this.setState({ email: "", name: "" });
      })
      .catch((err) => {});
  };

  render() {
    console.log({ name: this.state.name, email: this.state.email });
    return (
      <>
        <div>
          <p>Admin - Post data</p>
          <label for="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={(e) => this.handleNameChange(e)}
          />
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={(e) => this.handleEmailChange(e)}
          />
          <button onClick={() => this.sendData()}>send</button>
        </div>
        <div>
          <p>Admin - Update data</p>
          <label for="name">old Name</label>
          <input
            type="text"
            placeholder="Enter your old name"
            value={this.state.oldName}
            onChange={(e) => this.handleOldNameChange(e)}
          />
          <label for="name">New Name</label>
          <input
            type="text"
            placeholder="Enter your new name"
            value={this.state.name}
            onChange={(e) => this.handleNameChange(e)}
          />
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={(e) => this.handleEmailChange(e)}
          />
          <button onClick={() => this.updateData()}>send</button>
        </div>
      </>
    );
  }
}

export default Admin;
