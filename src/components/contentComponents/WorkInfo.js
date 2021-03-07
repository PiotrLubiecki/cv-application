import React, { Component } from 'react';
import ExpandButton from './ExpandButton';
import CompressButton from './CompressButton';
import { BiMinus } from 'react-icons/bi';
import uniqid from 'uniqid';

class WorkInfo extends Component {
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
        <div id="work-info">Work Experience</div>
        {this.state.button}
        <div id="w-info-form-div" className={visibility}>
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
              onChange={this.props.handleEmployerChange}
              value={this.props.employer}
            ></input>
            <label htmlFor="work-from">From:</label>
            <input
              type="date"
              id="work-from-input"
              onChange={this.props.handleWorkFromChange}
              value={this.props.workFrom}
            ></input>
            <label htmlFor="work-to">To:</label>
            <input
              type="date"
              id="work-to-input"
              onChange={this.props.handleWorkToChange}
              value={this.props.workTo}
            ></input>
            <button
              type="button"
              className="dates-add-button"
              onClick={this.props.submitWorkInfo}
            >
              Add
            </button>
          </form>
          <ul id="jobs-ul" className="hidden">
            {this.props.jobs.map((job) => {
              return (
                <li key={uniqid()}>
                  <span className="workedu-name">{job.name}</span>
                  <span className="workedu-dates">
                    {job.dateFrom} - {job.dateTo}
                  </span>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={this.props.removeJob}
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

export default WorkInfo;
