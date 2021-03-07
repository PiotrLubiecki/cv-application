import React, { Component } from 'react';
import ExpandButton from './ExpandButton';
import CompressButton from './CompressButton';
import { BiMinus } from 'react-icons/bi';
import uniqid from 'uniqid';

class EduInfo extends Component {
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
    const visibility = this.state.visible;
    return (
      <div className="info-div">
        <div id="edu-info">Education</div>
        {this.state.button}
        <div id="e-info-form-div" className={visibility}>
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
              onChange={this.props.handleSchoolNameChange}
              value={this.props.schoolName}
            ></input>
            <label htmlFor="work-from">From:</label>
            <input
              type="date"
              id="education-from-input"
              onChange={this.props.handleEducationFromChange}
              value={this.props.educationFrom}
            ></input>
            <label htmlFor="education-to">To:</label>
            <input
              type="date"
              id="education-to-input"
              onChange={this.props.handleEducationToChange}
              value={this.props.educationTo}
            ></input>
            <button
              type="button"
              className="dates-add-button"
              onClick={this.props.submitEduInfo}
            >
              Add
            </button>
          </form>
          <ul id="schools-ul" className="hidden">
            {this.props.schools.map((school) => {
              return (
                <li key={uniqid()}>
                  <span className="workedu-name">{school.name}</span>
                  <span className="workedu-dates">
                    {school.dateFrom} - {school.dateTo}
                  </span>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={this.props.removeSchool}
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
}

export default EduInfo;
