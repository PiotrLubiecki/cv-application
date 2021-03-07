import React, { Component } from 'react';
import { BiCaretDown } from 'react-icons/bi';

class ExpandButton extends Component {
  render() {
    return (
      <button type="button" id="expand-button" className="cv-button">
        <BiCaretDown />
      </button>
    );
  }
}

export default ExpandButton;
