import React from 'react';
import { BiCaretDown } from 'react-icons/bi';

function ExpandButton() {
  return (
    <button type="button" id="expand-button" className="cv-button">
      <BiCaretDown />
    </button>
  );
}

export default ExpandButton;
