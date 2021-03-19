import React, { useState } from 'react';
import ExpandButton from './ExpandButton';
import CompressButton from './CompressButton';
import { BiMinus } from 'react-icons/bi';
import uniqid from 'uniqid';

function WorkInfo(props) {
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
      <div id="work-info">Work Experience</div>
      {currentButton}
      <div id="w-info-form-div" className={visible}>
        <form
          id="work-info-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="employer">Employer:</label>
          <input
            type="text"
            id="employer-input"
            onChange={props.handleEmployerChange}
            value={props.employer}
          ></input>
          <label htmlFor="work-from">From:</label>
          <input
            type="date"
            id="work-from-input"
            onChange={props.handleWorkFromChange}
            value={props.workFrom}
          ></input>
          <label htmlFor="work-to">To:</label>
          <input
            type="date"
            id="work-to-input"
            onChange={props.handleWorkToChange}
            value={props.workTo}
          ></input>
          <button
            type="button"
            className="dates-add-button"
            onClick={props.submitWorkInfo}
          >
            Add
          </button>
        </form>
        <ul id="jobs-ul" className="hidden">
          {props.jobs.map((job) => {
            return (
              <li key={uniqid()}>
                <span className="workedu-name">{job.name}</span>
                <span className="workedu-dates">
                  {job.dateFrom} - {job.dateTo}
                </span>

                <button
                  type="button"
                  className="remove-button"
                  onClick={props.removeJob}
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

export default WorkInfo;
