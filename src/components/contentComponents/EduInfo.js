import React, { useState } from 'react';
import ExpandButton from './ExpandButton';
import CompressButton from './CompressButton';
import { BiMinus } from 'react-icons/bi';
import uniqid from 'uniqid';

function EduInfo(props) {
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
      <div id="edu-info">Education</div>
      {currentButton}
      <div id="e-info-form-div" className={visible}>
        <form
          id="education-info-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="employer">School Name::</label>
          <input
            type="text"
            id="school-name-input"
            onChange={props.handleSchoolNameChange}
            value={props.schoolName}
          ></input>
          <label htmlFor="work-from">From:</label>
          <input
            type="date"
            id="education-from-input"
            onChange={props.handleEducationFromChange}
            value={props.educationFrom}
          ></input>
          <label htmlFor="education-to">To:</label>
          <input
            type="date"
            id="education-to-input"
            onChange={props.handleEducationToChange}
            value={props.educationTo}
          ></input>
          <button
            type="button"
            className="dates-add-button"
            onClick={props.submitEduInfo}
          >
            Add
          </button>
        </form>
        <ul id="schools-ul" className="hidden">
          {props.schools.map((school) => {
            return (
              <li key={uniqid()}>
                <span className="workedu-name">{school.name}</span>
                <span className="workedu-dates">
                  {school.dateFrom} - {school.dateTo}
                </span>

                <button
                  type="button"
                  className="remove-button"
                  onClick={props.removeSchool}
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

export default EduInfo;
