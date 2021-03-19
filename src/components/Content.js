import React, { useState } from 'react';
import PersonalInfo from './contentComponents/PersonalInfo';
import EduInfo from './contentComponents/EduInfo';
import WorkInfo from './contentComponents/WorkInfo';
import SkillsInfo from './contentComponents/SkillsInfo';
import Sheet from './contentComponents/Sheet';

function Content() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthDateFormatted, setBirthDateFormatted] = useState('');
  const [eMail, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [schools, setSchools] = useState([]);
  const [schoolName, setSchoolName] = useState('');
  const [educationFrom, setEducationFrom] = useState('');
  const [educationTo, setEducationTo] = useState('');
  const [jobs, setJobs] = useState([]);
  const [employer, setEmployer] = useState('');
  const [workFrom, setWorkFrom] = useState('');
  const [workTo, setWorkTo] = useState('');
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleBirthChange(e) {
    setBirthDate(e.target.value);
    setBirthDateFormatted(e.target.value.split('-').reverse().join('.'));
  }
  function handleEMailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhoneNumber(e.target.value);
  }
  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }
  function handleEducationFromChange(e) {
    setEducationFrom(e.target.value);
  }
  function handleEducationToChange(e) {
    setEducationTo(e.target.value);
  }
  function submitEduInfo() {
    let newEduFrom = educationFrom.split('-').reverse().join('.');
    let newEduTo = educationTo.split('-').reverse().join('.');
    const obj = {
      name: schoolName,
      dateFrom: newEduFrom,
      dateTo: newEduTo,
    };
    setSchools(schools.concat(obj));
    setSchoolName('');
    setEducationFrom('');
    setEducationTo('');
    const ul = document.querySelector('#schools-ul');
    if (ul.classList.contains('hidden')) {
      ul.classList.remove('hidden');
    }
  }
  function removeSchool(e) {
    const buttons = document.querySelectorAll('.remove-button');
    const index = Array.from(buttons).indexOf(e.currentTarget);
    const newSchoolsList = schools.filter(
      (school) => schools.indexOf(school) !== index
    );
    setSchools(newSchoolsList);
    if (newSchoolsList.length === 0) {
      const ul = document.querySelector('#schools-ul');
      ul.classList.add('hidden');
    }
  }
  function handleEmployerChange(e) {
    setEmployer(e.target.value);
  }
  function handleWorkFromChange(e) {
    setWorkFrom(e.target.value);
  }
  function handleWorkToChange(e) {
    setWorkTo(e.target.value);
  }
  function submitWorkInfo() {
    const newWorkFrom = workFrom.split('-').reverse().join('.');
    const newWorkTo = workTo.split('-').reverse().join('.');
    const obj = {
      name: employer,
      dateFrom: newWorkFrom,
      dateTo: newWorkTo,
    };
    setJobs(jobs.concat(obj));
    setEmployer('');
    setWorkFrom('');
    setWorkTo('');
    const ul = document.querySelector('#jobs-ul');
    if (ul.classList.contains('hidden')) {
      ul.classList.remove('hidden');
    }
  }
  function removeJob(e) {
    const buttons = document.querySelectorAll('.remove-button');
    const index = Array.from(buttons).indexOf(e.currentTarget);
    const newJobsList = jobs.filter((job) => jobs.indexOf(job) !== index);
    setJobs(newJobsList);
    if (newJobsList.length === 0) {
      const ul = document.querySelector('#jobs-ul');
      ul.classList.add('hidden');
    }
  }
  function handleSkillChange(e) {
    setSkill(e.target.value);
  }
  function submitSkill(e) {
    if (e.code === 'Enter') e.preventDefault();
    if (skill !== '') {
      setSkills(skills.concat(skill));
      setSkill('');
      const ul = document.querySelector('#skills-ul');
      if (ul.classList.contains('hidden')) {
        ul.classList.remove('hidden');
      }
    }
  }
  function removeSkill(e) {
    const buttons = document.querySelectorAll('.remove-button');
    const index = Array.from(buttons).indexOf(e.currentTarget);
    const newSkillsList = skills.filter(
      (skill) => skills.indexOf(skill) !== index
    );
    setSkills(newSkillsList);
    if (newSkillsList.length === 0) {
      const ul = document.querySelector('#skills-ul');
      ul.classList.add('hidden');
    }
  }
  return (
    <div id="content">
      <div id="cv-info">
        <PersonalInfo
          name={name}
          birthDate={birthDate}
          eMail={eMail}
          phoneNumber={phoneNumber}
          handleNameChange={handleNameChange}
          handleBirthChange={handleBirthChange}
          handleEMailChange={handleEMailChange}
          handlePhoneChange={handlePhoneChange}
        />
        <EduInfo
          schools={schools}
          schoolName={schoolName}
          educationFrom={educationFrom}
          educationTo={educationTo}
          handleSchoolNameChange={handleSchoolNameChange}
          handleEducationFromChange={handleEducationFromChange}
          handleEducationToChange={handleEducationToChange}
          submitEduInfo={submitEduInfo}
          removeSchool={removeSchool}
        />
        <WorkInfo
          jobs={jobs}
          employer={employer}
          workFrom={workFrom}
          workTo={workTo}
          handleEmployerChange={handleEmployerChange}
          handleWorkFromChange={handleWorkFromChange}
          handleWorkToChange={handleWorkToChange}
          submitWorkInfo={submitWorkInfo}
          removeJob={removeJob}
        />
        <SkillsInfo
          skill={skill}
          skills={skills}
          handleSkillChange={handleSkillChange}
          submitSkill={submitSkill}
          removeSkill={removeSkill}
        />
      </div>
      <Sheet
        name={name}
        birthDate={birthDateFormatted}
        eMail={eMail}
        phoneNumber={phoneNumber}
        schools={schools}
        jobs={jobs}
        skills={skills}
      />
    </div>
  );
}

export default Content;
