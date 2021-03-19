import React, { useState } from 'react';
import ExpandButton from './ExpandButton';
import CompressButton from './CompressButton';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import uniqid from 'uniqid';

function SkillsInfo(props) {
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
      <div id="skills-info">Skills</div>
      {currentButton}
      <div id="s-info-form-div" className={visible}>
        <form
          id="skills-info-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="skill">Skill:</label>
          <input
            type="text"
            id="skill-input"
            onChange={props.handleSkillChange}
            value={props.skill}
          ></input>
          <button
            type="button"
            id="add-skill-button"
            onClick={props.submitSkill}
          >
            <BiPlus />
          </button>
        </form>
        <ul id="skills-ul" className="hidden">
          {props.skills.map((skill) => {
            return (
              <li key={uniqid()}>
                {skill}
                <button
                  type="button"
                  className="remove-button"
                  onClick={props.removeSkill}
                >
                  <BiMinus />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SkillsInfo;
