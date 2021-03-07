import React, { Component } from 'react';
import ExpandButton from './ExpandButton';
import CompressButton from './CompressButton';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import uniqid from 'uniqid';

class SkillsInfo extends Component {
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
        <div id="skills-info">Skills</div>
        {this.state.button}
        <div id="s-info-form-div" className={visibility}>
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
              onChange={this.props.handleSkillChange}
              value={this.props.skill}
            ></input>
            <button
              type="button"
              id="add-skill-button"
              onClick={this.props.submitSkill}
            >
              <BiPlus />
            </button>
          </form>
          <ul id="skills-ul" className="hidden">
            {this.props.skills.map((skill) => {
              return (
                <li key={uniqid()}>
                  {skill}
                  <button
                    type="button"
                    className="remove-button"
                    onClick={this.props.removeSkill}
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

export default SkillsInfo;
