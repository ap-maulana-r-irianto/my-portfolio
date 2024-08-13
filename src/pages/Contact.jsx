import React, { Component } from "react";
import "../styles.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div>
        <h2>Contact Me</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;
