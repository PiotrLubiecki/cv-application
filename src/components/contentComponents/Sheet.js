import React from 'react';
import uniqid from 'uniqid';

function Sheet(props) {
  return (
    <div id="sheet">
      <div id="sheet-personal">
        <span className="sheet-title">Personal Information</span>
        <span>
          <span className="personal-item-name">Name:</span> {props.name}
        </span>
        <span>
          <span className="personal-item-name">Birth date:</span>
          {props.birthDate}
        </span>
        <span>
          <span className="personal-item-name">E-mail:</span> {props.eMail}
        </span>
        <span>
          <span className="personal-item-name">Phone number:</span>{' '}
          {props.phoneNumber}
        </span>
      </div>
      <div id="sheet-education">
        <span className="sheet-title">Education</span>
        <ul id="sheet-schools-ul">
          {props.schools.map((school) => {
            return (
              <li key={uniqid()}>
                <span className="workedu-name">{school.name}</span>
                <span className="workedu-dates">
                  {school.dateFrom} - {school.dateTo}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="sheet-work">
        <span className="sheet-title">Work Experience</span>
        <ul id="sheet-jobs-ul">
          {props.jobs.map((job) => {
            return (
              <li key={uniqid()}>
                <span className="workedu-name">{job.name}</span>
                <span className="workedu-dates">
                  {job.dateFrom} - {job.dateTo}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="sheet-skills">
        <span className="sheet-title">Skills</span>
        <ul className="skills-ul">
          {props.skills.map((skill) => {
            return <li key={uniqid()}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sheet;
