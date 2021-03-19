import React, { useState } from 'react';
import ExpandButton from './ExpandButton';
import CompressButton from './CompressButton';

function PersonalInfo(props) {
  const [visible, setVisible] = useState('hidden');
  const [currentButton, setCurrentButton] = useState(
    <div className="cv-button-div" onClick={expand}>
      <ExpandButton />
    </div>
  );

  function expand() {
    setCurrentButton(
      <div className="cv-button-div" onClick={compress}>
        <CompressButton />
      </div>
    );
    setVisible('visible');
  }
  function compress() {
    setCurrentButton(
      <div className="cv-button-div" onClick={expand}>
        <ExpandButton />
      </div>
    );
    setVisible('hidden');
  }

  return (
    <div className="info-div">
      <div id="personal-info">Personal Information</div>
      {currentButton}
      <div id="p-info-form-div" className={visible}>
        <form id="personal-info-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name-input"
            onChange={props.handleNameChange}
            value={props.name}
          ></input>
          <label htmlFor="birth-date">Birth date:</label>
          <input
            type="date"
            id="birth-date-input"
            onChange={props.handleBirthChange}
            value={props.birthDate}
          ></input>
          <label htmlFor="e-mail">E-mail:</label>
          <input
            type="email"
            id="email-input"
            onChange={props.handleEMailChange}
            value={props.eMail}
          ></input>
          <label htmlFor="phone-number">Phone number:</label>
          <input
            type="tel"
            id="phone-number-input"
            onChange={props.handlePhoneChange}
            value={props.phoneNumber}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
