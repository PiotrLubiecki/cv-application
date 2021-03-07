import React, { Component } from 'react';
import ExpandButton from './ExpandButton';
import CompressButton from './CompressButton';

class PersonalInfo extends Component {
  constructor() {
    super();
    this.expand = this.expand.bind(this);
    this.compress = this.compress.bind(this);
    this.state = {
      button: (
        <div className="cv-button-div" onClick={this.expand}>
          <ExpandButton />
        </div>
      ),
      visible: 'hidden',
    };
  }
  expand() {
    this.setState({
      button: (
        <div className="cv-button-div" onClick={this.compress}>
          <CompressButton />
        </div>
      ),
      visible: 'visible',
    });
  }
  compress() {
    this.setState({
      button: (
        <div className="cv-button-div" onClick={this.expand}>
          <ExpandButton />
        </div>
      ),
      visible: 'hidden',
    });
  }

  render() {
    return (
      <div className="info-div">
        <div id="personal-info">Personal Information</div>
        {this.state.button}
        <div id="p-info-form-div" className={this.state.visible}>
          <form id="personal-info-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name-input"
              onChange={this.props.handleNameChange}
              value={this.props.name}
            ></input>
            <label htmlFor="birth-date">Birth date:</label>
            <input
              type="date"
              id="birth-date-input"
              onChange={this.props.handleBirthChange}
              value={this.props.birthDate}
            ></input>
            <label htmlFor="e-mail">E-mail:</label>
            <input
              type="email"
              id="email-input"
              onChange={this.props.handleEMailChange}
              value={this.props.eMail}
            ></input>
            <label htmlFor="phone-number">Phone number:</label>
            <input
              type="tel"
              id="phone-number-input"
              onChange={this.props.handlePhoneChange}
              value={this.props.phoneNumber}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
