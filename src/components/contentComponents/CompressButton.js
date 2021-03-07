import React, { Component } from 'react';
import { BiCaretUp } from 'react-icons/bi';

class CompressButton extends Component {
  render() {
    return (
      <button type="button" id="compress-button" className="cv-button">
        <BiCaretUp />
      </button>
    );
  }
}

export default CompressButton;
