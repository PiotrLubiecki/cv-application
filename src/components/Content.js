import React, { Component } from 'react';
import PersonalInfo from './contentComponents/PersonalInfo';
import EduInfo from './contentComponents/EduInfo';
import WorkInfo from './contentComponents/WorkInfo';
import SkillsInfo from './contentComponents/SkillsInfo';
import Sheet from './contentComponents/Sheet';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      birthDate: '',
      birthDateFormatted: '',
      eMail: '',
      phoneNumber: '',
      schools: [],
      schoolName: '',
      educationFrom: '',
      educationTo: '',
      jobs: [],
      employer: '',
      workFrom: '',
      workTo: '',
      skill: '',
      skills: [],
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBirthChange = this.handleBirthChange.bind(this);
    this.handleEMailChange = this.handleEMailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
    this.handleEducationFromChange = this.handleEducationFromChange.bind(this);
    this.handleEducationToChange = this.handleEducationToChange.bind(this);
    this.submitEduInfo = this.submitEduInfo.bind(this);
    this.removeSchool = this.removeSchool.bind(this);
    this.handleEmployerChange = this.handleEmployerChange.bind(this);
    this.handleWorkFromChange = this.handleWorkFromChange.bind(this);
    this.handleWorkToChange = this.handleWorkToChange.bind(this);
    this.submitWorkInfo = this.submitWorkInfo.bind(this);
    this.removeJob = this.removeJob.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.submitSkill = this.submitSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleBirthChange = (e) => {
    this.setState({
      birthDate: e.target.value,
      birthDateFormatted: e.target.value.split('-').reverse().join('.'),
    });
  };
  handleEMailChange = (e) => {
    this.setState({
      eMail: e.target.value,
    });
  };
  handlePhoneChange = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };
  handleSchoolNameChange = (e) => {
    this.setState({
      schoolName: e.target.value,
    });
  };
  handleEducationFromChange = (e) => {
    this.setState({
      educationFrom: e.target.value,
    });
  };
  handleEducationToChange = (e) => {
    this.setState({
      educationTo: e.target.value,
    });
  };
  submitEduInfo() {
    let newEduFrom = this.state.educationFrom.split('-').reverse().join('.');
    let newEduTo = this.state.educationTo.split('-').reverse().join('.');
    const obj = {
      name: this.state.schoolName,
      dateFrom: newEduFrom,
      dateTo: newEduTo,
    };
    this.setState({
      schools: this.state.schools.concat(obj),
      schoolName: '',
      educationTo: '',
      educationFrom: '',
    });
    const ul = document.querySelector('#schools-ul');
    if (ul.classList.contains('hidden')) {
      ul.classList.remove('hidden');
    }
  }
  removeSchool = (e) => {
    const buttons = document.querySelectorAll('.remove-button');
    const index = Array.from(buttons).indexOf(e.currentTarget);
    const newSchoolsList = this.state.schools.filter(
      (school) => this.state.schools.indexOf(school) !== index
    );
    this.setState({
      schools: newSchoolsList,
    });
    if (newSchoolsList.length === 0) {
      const ul = document.querySelector('#schools-ul');
      ul.classList.add('hidden');
    }
  };
  handleEmployerChange = (e) => {
    this.setState({
      employer: e.target.value,
    });
  };
  handleWorkFromChange = (e) => {
    this.setState({
      workFrom: e.target.value,
    });
  };
  handleWorkToChange = (e) => {
    this.setState({
      workTo: e.target.value,
    });
  };
  submitWorkInfo() {
    const newWorkFrom = this.state.workFrom.split('-').reverse().join('.');
    const newWorkTo = this.state.workTo.split('-').reverse().join('.');
    const obj = {
      name: this.state.employer,
      dateFrom: newWorkFrom,
      dateTo: newWorkTo,
    };
    this.setState({
      jobs: this.state.jobs.concat(obj),
      employer: '',
      workTo: '',
      workFrom: '',
    });
    const ul = document.querySelector('#jobs-ul');
    if (ul.classList.contains('hidden')) {
      ul.classList.remove('hidden');
    }
  }
  removeJob = (e) => {
    const buttons = document.querySelectorAll('.remove-button');
    const index = Array.from(buttons).indexOf(e.currentTarget);
    const newJobsList = this.state.jobs.filter(
      (job) => this.state.jobs.indexOf(job) !== index
    );
    this.setState({
      jobs: newJobsList,
    });
    if (newJobsList.length === 0) {
      const ul = document.querySelector('#jobs-ul');
      ul.classList.add('hidden');
    }
  };
  handleSkillChange = (e) => {
    this.setState({
      skill: e.target.value,
    });
  };
  submitSkill = (e) => {
    if (e.code === 'Enter') e.preventDefault();
    if (this.state.skill !== '') {
      this.setState({
        skills: this.state.skills.concat(this.state.skill),
        skill: '',
      });
      const ul = document.querySelector('#skills-ul');
      if (ul.classList.contains('hidden')) {
        ul.classList.remove('hidden');
      }
    }
  };
  removeSkill = (e) => {
    const buttons = document.querySelectorAll('.remove-button');
    const index = Array.from(buttons).indexOf(e.currentTarget);
    const newSkillsList = this.state.skills.filter(
      (skill) => this.state.skills.indexOf(skill) !== index
    );
    this.setState({
      skills: newSkillsList,
    });
    if (newSkillsList.length === 0) {
      const ul = document.querySelector('#skills-ul');
      ul.classList.add('hidden');
    }
  };
  render() {
    return (
      <div id="content">
        <div id="cv-info">
          <PersonalInfo
            name={this.state.name}
            birthDate={this.state.birthDate}
            eMail={this.state.eMail}
            phoneNumber={this.state.phoneNumber}
            handleNameChange={this.handleNameChange}
            handleBirthChange={this.handleBirthChange}
            handleEMailChange={this.handleEMailChange}
            handlePhoneChange={this.handlePhoneChange}
          />
          <EduInfo
            schools={this.state.schools}
            schoolName={this.state.schoolName}
            educationFrom={this.state.educationFrom}
            educationTo={this.state.educationTo}
            handleSchoolNameChange={this.handleSchoolNameChange}
            handleEducationFromChange={this.handleEducationFromChange}
            handleEducationToChange={this.handleEducationToChange}
            submitEduInfo={this.submitEduInfo}
            removeSchool={this.removeSchool}
          />
          <WorkInfo
            jobs={this.state.jobs}
            employer={this.state.employer}
            workFrom={this.state.workFrom}
            workTo={this.state.workTo}
            handleEmployerChange={this.handleEmployerChange}
            handleWorkFromChange={this.handleWorkFromChange}
            handleWorkToChange={this.handleWorkToChange}
            submitWorkInfo={this.submitWorkInfo}
            removeJob={this.removeJob}
          />
          <SkillsInfo
            skill={this.state.skill}
            skills={this.state.skills}
            handleSkillChange={this.handleSkillChange}
            submitSkill={this.submitSkill}
            removeSkill={this.removeSkill}
          />
        </div>
        <Sheet
          name={this.state.name}
          birthDate={this.state.birthDateFormatted}
          eMail={this.state.eMail}
          phoneNumber={this.state.phoneNumber}
          schools={this.state.schools}
          jobs={this.state.jobs}
          skills={this.state.skills}
        />
      </div>
    );
  }
}

export default Content;
